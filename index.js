var mysql = require('mysql');

var con = mysql.createConnection({
    host: "database-1.cy1o7goo5ka8.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "mysqladmin",
    database: "VICTORY"
});

con.connect(function (err) {
    if (err) throw err;
    var d = new Date();
    var sql = `INSERT INTO Members (FirstName,LastName) VALUES ('fname ${d.getTime()}', 'lname ${new Date()}')`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.insertId);
        con.end();
        return;
    });
});
