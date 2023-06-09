const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    logging: true,
    debug: true
});

connection.connect(err => {
    if(err) console.log(err);
});

module.exports = connection;
