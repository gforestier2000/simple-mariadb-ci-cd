console.log("hello");
/*require('dotenv').config();
// prendre en compte l'environnement
//require('dotenv').config({path: __dirname + '/.env'});

const logger = require('./config/logger');

logger.http("HTTP message");
logger.debug("DEBUG message");
logger.info("INFO message");
logger.warn("WARN message");
logger.error("ERROR message");
logger.fatal("FATAL message");
*/
const MySQL = require('mysql');

console.log("utilisateur avant MySQL.createConnection");
console.log(`DB_HOST : ${process.env.DB_HOST}`);
console.log(`DB_PORT : ${process.env.DB_PORT}`);
console.log(`DB_USER : ${process.env.DB_USER}`);
console.log(`DB_PASSWORD : ${process.env.DB_PASSWORD}`);
console.log(`DB_DATABASE : ${process.env.DB_DATABASE}`);


const mysqlConnection = MySQL.createConnection({
    host: process.env.DB_HOST, //192.168.2.47
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});



//const mysqlConnection = require('../config/dbconfig');

console.log("utilisateur après MySQL.createConnection");

mysqlConnection.connect((err) => {
    if (!err)
        console.log("DB connection succeed");
    else {
        console.log("DB connection failed");
        console.log(err);
    }
});