const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'db4free.net',
    user: 'ahmedgomaa',
    port: 3306,
    database: 'bug_tracker',
    password: 'CivilWeb1!',
    logging: true,
    debug: true
});

connection.connect(err => {
    if(err) console.log(err);
});

module.exports = connection;
