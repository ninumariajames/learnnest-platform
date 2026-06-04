const express = require('express');
const router = express.Router();

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

module.exports = router;