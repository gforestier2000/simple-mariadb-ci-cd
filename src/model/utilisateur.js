const db = require('../config/db.js');
//console.log("utilisateur après MySQL.createConnection");
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
    let handle = db.connection();
    handle.query(insertUser, [email, firstname, lastname], (err, res) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, res);
    });
    handle.end();
}

function findOneUser(id, callback) {
    const selectUser = "SELECT * FROM users WHERE id=?";
    try {
        let handle = db.connection();
        handle.query(selectUser, [id], (err, res) => {
            if (err) {
                //console.log("DB SELECT ONE failed");
                //console.log(err.message);
                return callback(err, null);
            }
            //console.log("DB SELECT ONE succeed");
            //console.log(res);
            return callback(null, res);
        });
        handle.end();
    }
    catch (err) {
        //console.log("dans le catch");
    }
}

function findAllUsers(callback) {
    const selectUser = "SELECT * FROM users";

    let handle = db.connection();
    handle.query(selectUser, (err, res) => {
        if (err) {
            //console.log("DB SELECT ALL failed");
            //console.log(err.message);
            return callback(err, null);
        }
        //console.log("DB SELECT ALL succeed");
        //console.log(res);
        return callback(null, res);
    });
    handle.end();
}

function deleteOneUser(id, callback) {
    const deleteUser = "DELETE FROM users WHERE id=?";
    let handle = db.connection();
    handle.query(deleteUser, [id], (err, res) => {
        if (err) {
            //console.log("DB DELETE ONE failed");
            //console.log(err.message);
            return callback(err, null);
        }
        //console.log("DB DELETE ONE succeed");
        //console.log(res);
        return callback(null, res);
    });
    handle.end();
}

function updateOneUser(id,email,firstname,lastname,callback){
    const updateUser = "UPDATE users SET email = ?, firstname = ?, lastname = ?  WHERE id=?";
    let handle = db.connection();
    handle.query(updateUser, [email, firstname, lastname, id], (err, res) => {
        if (err) {
            //console.log("DB UPDATE ONE failed");
            //console.log(err.message);
            return callback(err, null);
        }
        //console.log("DB UPDATE ONE succeed");
        //console.log(res);
        return callback(null, res);
    });
    handle.end();
}


module.exports.saveUser = saveUser;
module.exports.findOneUser = findOneUser;
module.exports.findAllUsers = findAllUsers;
module.exports.deleteOneUser = deleteOneUser;
module.exports.updateOneUser = updateOneUser;

