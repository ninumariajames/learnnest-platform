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

console.log('MySQL Pool Created');

module.exports = connection;