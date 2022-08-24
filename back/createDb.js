const db = require('../db')

const createDatabase = async () =>{
    await db.query("CREATE DATABASE Users",
        function(err, results) {
            if(err) console.log(err);
            else console.log("База данных создана");
        });
    db.database = 'Users'
}

const createTable = async () =>{
    const sql = `create table if not exists users(
    id int primary key auto_increment,
    name varchar(255) not null,
    password varchar(255) not null
    )`;
    await db.query(sql, function(err, results) {
        if(err) console.log(err);
        else console.log("Таблица создана");
    });
}

createDatabase().then(createTable)

