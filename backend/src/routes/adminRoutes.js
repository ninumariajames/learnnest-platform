const express = require('express');
const router = express.Router();

const verifyToken = require('../middleware/authMiddleware');
const authorizeRole = require('../middleware/roleMiddleware');

router.get(
    '/dashboard',
    verifyToken,
    authorizeRole('admin'),
    (req, res) => {
        res.json({
            message: 'Welcome Admin'
        });
    }
);

module.exports = router;