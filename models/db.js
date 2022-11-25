var mysql = require("mysql2");
var conn = require("../config/Config");

var con = mysql.createConnection({
    host: conn.HOST,
    user: conn.USER,
    password: conn.PASSWORD,
    database: conn.DB
})

con.connect(function(err) {
  try{
    if(err) throw err;
    console.log("Connected successfully");
  }
  catch(e){
    console.log(e);
  }
  });

module.exports = con;