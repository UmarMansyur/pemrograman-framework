const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: '127.0.0.1',
  port: '3306',
  database: 'test'
})