const express = require('express');
const router = express.Router();

const db = require('../config/db');

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
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json(results);
        }
    );
});

module.exports = router;