const express = require('express');
const router = express.Router();
const db = require('../config/db');
const verifyToken = require('../middleware/authMiddleware');

router.post(
    '/courses/:id/enroll',
    verifyToken,
    (req, res) => {
        const userId = req.user.id;
        const courseId = req.params.id;

        db.query(
            'INSERT INTO enrollments (user_id, course_id) VALUES (?, ?)',
            [userId, courseId],
            (err, result) => {
                if (err) {
                    return res.status(500).json({
                        error: err.message
                    });
                }

                res.json({
                    message: 'Enrolled successfully',
                    enrollmentId: result.insertId
                });
            }
        );
    }
);

router.get(
    '/my-courses',
    verifyToken,
    (req, res) => {

        const userId = req.user.id;

        const sql = `
            SELECT c.*
            FROM courses c
            JOIN enrollments e
            ON c.id = e.course_id
            WHERE e.user_id = ?
        `;

        db.query(
            sql,
            [userId],
            (err, results) => {

                if (err) {
                    return res.status(500).json({
                        error: err.message
                    });
                }

                res.json(results);
            }
        );
    }
);

module.exports = router;