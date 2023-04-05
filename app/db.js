var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "/root/db/test.db"
// const DBSOURCE = "../db/test.db"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE IF NOT EXISTS user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text
            )`,
            (err) => {
                if (err) {
                    console.log(err.message)
                }else{
                    var insert = 'INSERT INTO user (name) VALUES (?)'
                    db.run(insert, ["john"])
                    db.run(insert, ["ann"])
                }
            });
    }
});


module.exports = db