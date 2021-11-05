
const db = require('./config/db.js');

function handleDBError(err, res){
    if (err) {
        ////console.log("DB INSERT failed");
        //console.log(err.message);
        console.log(err);
        return false;
    }
    ////console.log("DB INSERT succeed");
    console.log(res);
    return true;

}
function  checkDatabase(){
    const tableExist = "CREATE TABLE `users` ( \
        `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id de l''utilisateur', \
        `email` varchar(250) NOT NULL COMMENT 'email de l''utilisateur', \
        `firstname` varchar(250) DEFAULT NULL COMMENT 'prenom de l''utilisateur', \
        `lastname` varchar(250) DEFAULT NULL COMMENT 'nom de l''utilisateur', \
        PRIMARY KEY (`id`), \
        UNIQUE KEY `email_UNIQUE` (`email`) \
      ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COMMENT='Utilisateurs de l''application';";
    let handle = db.connection();
    handle.query("USE `chess`;",  handleDBError);
    handle.query("DROP TABLE IF EXISTS `users`;",  handleDBError);
    handle.query(tableExist,  handleDBError);
    handle.query("DROP TABLE IF EXISTS `test`;",  handleDBError);
    handle.query("CREATE TABLE `test` (`id` int(11) NOT NULL AUTO_INCREMENT, `plouf` varchar(250) DEFAULT NULL, PRIMARY KEY (`id`) ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 ;",  handleDBError);
    handle.query("describe `users`");
    handle.end();
}

checkDatabase();

