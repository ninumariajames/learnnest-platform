const express = require('express');
const router = express.Router();

const upload = require('../controllers/uploadcontroller');
const db = require('../config/db');

router.post(
    '/',
    upload.single('file'),
    (req, res) => {

        if (!req.file) {
            return res.status(400).json({
                message: 'No file uploaded'
            });
        }

        const sql =
            'INSERT INTO uploads (filename, original_name) VALUES (?, ?)';

        db.query(
            sql,
            [req.file.filename, req.file.originalname],
            (err, result) => {

                if (err) {
                    return res.status(500).json({
                        error: err.message
                    });
                }

                res.json({
                    message: 'File uploaded successfully',
                    uploadId: result.insertId,
                    file: req.file.filename
                });
            }
        );
    }
);

module.exports = router;