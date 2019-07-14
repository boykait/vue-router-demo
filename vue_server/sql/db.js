const Client = require('mysql-pro');
const db = new Client({
  mysql: {
    host: 'localhost',
    port: 3306,
    database: 'user_manage',
    user: 'root',
    password: '123456'
  }
})
module.exports = db;
