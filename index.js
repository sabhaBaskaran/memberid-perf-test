var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "victorycapital",
    database: "victory"
});

con.connect(function (err) {
    if (err) throw err;
    var d = new Date();
    var sql = `INSERT INTO Persons (FirstName,LastName) VALUES ('fname ${d.getTime()}', 'lname ${new Date()}')`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.insertId);
        con.end();
        return;
    });
});
