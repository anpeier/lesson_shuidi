var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '192.168.31.128',
    user: 'root',
    password: '1234567890',
    database: 'batschool'
});
connection.connect();
// - web服务器
const http = require('http'); //node 内置模块
const fs = require('fs'); //文件资源
const server = http.createServer((req, res) => {
    // www.baidu.com -> ip req 网友
    // res html http协议
    // res.end('hello world');
    if (req.url == '/') {
    fs.createReadStream('./index.html')
    .pipe(res); //pipe 管道
    } else if (req.url == '/students') {
        connection.query('SELECT * FROM students',function (error, results, friends) {
            if (error) {
                console.log(error);
                return;
            }
            console.log(results);
            const data = results;
            res.writeHead(200, {'Content-Type': 'text/json;charset=UTF8'});
            res.end(JSON.stringify(data)); //JSON.stringify() json =》字符串
        })
      
        // 响应 = 响应头+响应体
    } 
    
});
server.listen(1314);