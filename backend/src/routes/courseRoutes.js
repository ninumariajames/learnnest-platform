const express = require('express');
const router = express.Router();

const db = require('../config/db');
const upload = require('../controllers/uploadcontroller');

const verifyToken = require('../middleware/authMiddleware');
const authorizeRole = require('../middleware/roleMiddleware');

const {
    createCourse,
    getCourses,
    updateCourse,
    deleteCourse
} = require('../controllers/courseController');

router.post(
    '/',
    verifyToken,
    authorizeRole('admin'),
    createCourse
);

router.get('/', getCourses);

router.put(
    '/:id',
    verifyToken,
    authorizeRole('admin'),
    updateCourse
);

router.delete(
    '/:id',
    verifyToken,
    authorizeRole('admin'),
    deleteCourse
);

router.get('/:id/materials', (req, res) => {
    const courseId = req.params.id;

    db.query(
        'SELECT * FROM uploads WHERE course_id = ?',
        [courseId],
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.json(results);
        }
    );
});

router.post(
    '/:id/materials',
    verifyToken,
    authorizeRole('admin'),
    upload.single('file'),
    (req, res) => {
        const courseId = req.params.id;

        if (!req.file) {
            return res.status(400).json({
                message: 'No file uploaded'
            });
        }

        db.query(
            'INSERT INTO uploads (filename, original_name, course_id) VALUES (?, ?, ?)',
            [
                req.file.filename,
                req.file.originalname,
                courseId
            ],
            (err, result) => {
                if (err) {
                    return res.status(500).json({
                        error: err.message
                    });
                }

                res.json({
                    message: 'Material uploaded successfully',
                    uploadId: result.insertId,
                    courseId
                });
            }
        );
    }
);

module.exports = router;