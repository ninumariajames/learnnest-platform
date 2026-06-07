const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'learnnest-mysql',
    user: 'root',
    password: 'root123',
    database: 'learnnest',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }

    console.log('MySQL Connected');
});

module.exports = connection;