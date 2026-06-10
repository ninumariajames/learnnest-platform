const express = require('express');
const router = express.Router();
const db = require('../config/db');
const verifyToken = require('../middleware/authMiddleware');

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

module.exports = router;