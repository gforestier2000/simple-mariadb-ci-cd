
const db = require('../config/db.js');


function  checkDatabase(){
    const tableExist = "CREATE TABLE `users` ( \
        `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id de l''utilisateur', \
        `email` varchar(250) NOT NULL COMMENT 'email de l''utilisateur', \
        `firstname` varchar(250) DEFAULT NULL COMMENT 'pr├®nom de l''utilisateur', \
        `lastname` varchar(250) DEFAULT NULL COMMENT 'nom de l''utilisateur', \
        PRIMARY KEY (`id`), \
        UNIQUE KEY `email_UNIQUE` (`email`) \
      ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COMMENT='Utilisateurs de l''application';"
    db.connection().query(tableExist, (err, res) => {
        if (err) {
            //console.log("DB INSERT failed");
            console.log(err.message);
            console.log(err);
            return false;
        }
        //console.log("DB INSERT succeed");
        console.log(res);
        return true;
    });
}

checkDatabase();

console.log("utilisateur après MySQL.createConnection");
class utilisateur {
    constructor(id, email, firstname, lastname) {
        this.id = id;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

function saveUser(email, firstname, lastname, callback) {
    const insertUser = "INSERT INTO users (email, firstname, lastname) VALUES (? , ? , ?)";
    db.connection().query(insertUser, [email, firstname, lastname], (err, res) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, res);
    });
}

function findOneUser(id, callback) {
    const selectUser = "SELECT * FROM users WHERE id=?";
    try {
        db.connection().query(selectUser, [id], (err, res) => {
            if (err) {
                console.log("DB SELECT ONE failed");
                console.log(err.message);
                return callback(err, null);
            }
            console.log("DB SELECT ONE succeed");
            console.log(res);
            return callback(null, res);
        });
    }
    catch (err) {
        console.log("dans le catch");
    }
}

function findAllUsers(callback) {
    const selectUser = "SELECT * FROM users";

    db.connection().query(selectUser, (err, res) => {
        if (err) {
            console.log("DB SELECT ALL failed");
            console.log(err.message);
            return callback(err, null);
        }
        console.log("DB SELECT ALL succeed");
        console.log(res);
        return callback(null, res);
    });
}

function deleteOneUser(id, callback) {
    const deleteUser = "DELETE FROM users WHERE id=?";
    db.connection().query(deleteUser, [id], (err, res) => {
        if (err) {
            console.log("DB DELETE ONE failed");
            console.log(err.message);
            return callback(err, null);
        }
        console.log("DB DELETE ONE succeed");
        console.log(res);
        return callback(null, res);
    });
}

function updateOneUser(id,email,firstname,lastname,callback){
    const updateUser = "UPDATE users SET email = ?, firstname = ?, lastname = ?  WHERE id=?";
    db.connection().query(updateUser, [email, firstname, lastname, id], (err, res) => {
        if (err) {
            console.log("DB UPDATE ONE failed");
            console.log(err.message);
            return callback(err, null);
        }
        console.log("DB UPDATE ONE succeed");
        console.log(res);
        return callback(null, res);
    });
}


module.exports.saveUser = saveUser;
module.exports.findOneUser = findOneUser;
module.exports.findAllUsers = findAllUsers;
module.exports.deleteOneUser = deleteOneUser;
module.exports.updateOneUser = updateOneUser;