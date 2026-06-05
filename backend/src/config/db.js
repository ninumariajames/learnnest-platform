const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'learnnest-mysql',
    user: 'root',
    password: 'root123',
    database: 'learnnest'
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }

    console.log('MySQL Connected');
});

module.exports = connection;