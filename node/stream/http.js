const http = require('http');
const fs = require('fs')
http.createServer((req, res) => {
  // 返回 html
  // 文件读出来
  // 文件内容写回去
  // Requests per second:    2753.83 [#/sec] (
  // Requests per second:    2286.62 [#/sec] (mean)
  const readStream = fs.createReadStream('./index.html');
  readStream.pipe(res);
})
.listen(8080, () => {
  console.log('8080');
})