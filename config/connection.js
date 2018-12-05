// Set up MySQL connection.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: "	gx97kbnhgjzh3efb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "	n9fmmxaajm0k6afh",
    password: "gmlh6kqyuywzvybf",
    database: "xo5jjy6i5p37uwid"
  });
};

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
