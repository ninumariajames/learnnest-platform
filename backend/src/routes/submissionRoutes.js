const express = require('express');
const router = express.Router();
const db = require('../config/db');
const verifyToken = require('../middleware/authMiddleware');
const authorizeRole = require('../middleware/roleMiddleware');

router.post(
    '/assignments/:id/submit',
    verifyToken,
    (req, res) => {

        const assignmentId = req.params.id;
        const userId = req.user.id;
        const filename = req.body.filename;

        db.query(
            'INSERT INTO submissions (assignment_id, user_id, filename) VALUES (?, ?, ?)',
            [assignmentId, userId, filename],
            (err, result) => {

                if (err) {
                    return res.status(500).json({
                        error: err.message
                    });
                }

                res.json({
                    message: 'Assignment submitted',
                    submissionId: result.insertId
                });
            }
        );
    }
);

router.get(
    '/submissions',
    verifyToken,
    authorizeRole('admin'),
    (req, res) => {

        db.query(
            'SELECT * FROM submissions',
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

router.post(
    '/submissions/:id/grade',
    verifyToken,
    authorizeRole('admin'),
    (req, res) => {

        const submissionId = req.params.id;
        const { grade } = req.body;

        db.query(
            'UPDATE submissions SET grade = ? WHERE id = ?',
            [grade, submissionId],
            (err) => {

                if (err) {
                    return res.status(500).json({
                        error: err.message
                    });
                }

                res.json({
                    message: 'Grade assigned'
                });
            }
        );
    }
);

module.exports = router;