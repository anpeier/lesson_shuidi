const http = require('http');
const fs = require('fs')
http.createServer((req, res) => {
  // 返回 html
  // 文件读出来
  // 文件内容写回去
  fs.readFile('./index.html', 'utf8', (err, info) => {
    res.end(info);
  })
})
.listen(8081, () => {
  console.log('8081');
})