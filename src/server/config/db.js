var mysql = require('mysql')

const db = mysql.createPool({
  host : 'localhost',
  user : 'root',
  password : '33123asd',
  database : 'post',
  port : 3306
})

module.exports = db;