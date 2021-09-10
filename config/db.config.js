'use strict';
const mysql = require('mysql');
const dbConn = mysql.createConnection({
  host     : 'localhost',
  port:'3306',
  user     : 'root',
  password : '',
  database : 'bookshopdb_047'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;