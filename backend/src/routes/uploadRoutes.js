const express = require('express');
const router = express.Router();

const upload = require('../controllers/uploadcontroller');

router.post(
    '/',
    upload.single('file'),
    (req, res) => {

        if (!req.file) {
            return res.status(400).json({
                message: 'No file uploaded'
            });
        }

        res.json({
            message: 'File uploaded successfully',
            file: req.file.filename
        });
    }
);

module.exports = router;