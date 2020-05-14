const fs = require('fs');
const http = require('http');
const querystring = require('querystring');
const server = http.createServer((req, res) => {
  if (req.url === "/file" && req.method.toLowerCase() === "post") {
    parseFile(req, res);
  } else {
    fs.createReadStream('./index.html').pipe(res);
  }
})
function parseFile(req, res) {
  req.setEncoding("binary");
  let body = "";
  let fileName = "";
  // 边界字符
  let boundary = req.headers['content-type']
    .split('; ')[1]
    .replace("boundary=", "")
  
  req.on("data", function(chunk) {
    body += chunk;
  });
  req.on("end", function() {
    // 单个文件 只能处理 jpeg
    let lines = body.split('Content-Type: image/jpeg\r\n\r\n');
    let end = lines[1].indexOf('--' + boundary + '--') - 2
    let binary = lines[1].substring(0, end);
    fs.writeFile('upload.jpg', binary, {encoding: 'binary' }, (err) => {
      if (err) {
        console.log(err);
      }
    })
    // 只处理
    res.end('ok')
  })
}

server.listen(7787)