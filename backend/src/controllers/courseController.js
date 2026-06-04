const db = require('../config/db');

const createCourse = (req, res) => {
    const { title, description } = req.body;

    const sql =
        'INSERT INTO courses (title, description) VALUES (?, ?)';

    db.query(
        sql,
        [title, description],
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.status(201).json({
                message: 'Course created successfully'
            });
        }
    );
};

const getCourses = (req, res) => {
    db.query(
        'SELECT * FROM courses',
        (err, results) => {
            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json(results);
        }
    );
};

const updateCourse = (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    const sql =
        'UPDATE courses SET title=?, description=? WHERE id=?';

    db.query(
        sql,
        [title, description, id],
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json({
                message: 'Course updated successfully'
            });
        }
    );
};

const deleteCourse = (req, res) => {
    const { id } = req.params;

    db.query(
        'DELETE FROM courses WHERE id=?',
        [id],
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json({
                message: 'Course deleted successfully'
            });
        }
    );
};

module.exports = {
    createCourse,
    getCourses,
    updateCourse,
    deleteCourse
};