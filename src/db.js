const MySQL = require('mysql');

let mysqlConnection;

function connection(){
     return mysqlConnection = MySQL.createConnection({
        host: process.env.DB_HOST, //192.168.2.47
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    });
}

module.exports.connection = connection;