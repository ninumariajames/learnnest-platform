const express = require('express');
const router = express.Router();
const db = require('../config/db');
const verifyToken = require('../middleware/authMiddleware');
const authorizeRole = require('../middleware/roleMiddleware');

router.post(
    '/courses/:id/assignments',
    verifyToken,
    authorizeRole('admin'),
    (req, res) => {

        const courseId = req.params.id;
        const { title, description } = req.body;

        db.query(
            'INSERT INTO assignments (course_id, title, description) VALUES (?, ?, ?)',
            [courseId, title, description],
            (err, result) => {

                if (err) {
                    return res.status(500).json({
                        error: err.message
                    });
                }

                res.json({
                    message: 'Assignment created',
                    assignmentId: result.insertId
                });
            }
        );
    }
);

router.get(
    '/courses/:id/assignments',
    verifyToken,
    (req, res) => {

        db.query(
            'SELECT * FROM assignments WHERE course_id = ?',
            [req.params.id],
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