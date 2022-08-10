const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: 3308,
    password: 'root',
    database: 'shopping_db'
});

module.exports = connection;