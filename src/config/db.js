// check env variable
require('dotenv').config('../.env');

const MySQL = require('mysql');

let mysqlConnection;



function connection(){

    console.log("connection PARAMS");
    console.log(process.env.DB_HOST);
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_DATABASE);

     return mysqlConnection = MySQL.createConnection({
        host: process.env.DB_HOST, //192.168.2.47
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    });
}

module.exports.connection = connection;