const mysql = require('msql');

const conn = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: "",
    database: 'ui_3_5_36'
});