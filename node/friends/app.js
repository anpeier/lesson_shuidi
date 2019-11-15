var mysql = require('mysql');

// 取出mysql的数据 
// - 连接mysql
// - 执行sql 查询
var connection = mysql.createConnection({
    host: '192.168.31.128',
    user: 'root',
    password: '1234567890',
    database: 'batschool'
})

connection.connect();

connection.query('SELECT * FROM students',function (error, results, friends) {
    if (error) {
        console.log(error);
        return;
    }
    console.log(results);
})