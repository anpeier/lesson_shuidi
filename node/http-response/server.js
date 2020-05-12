const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {
    'Transfer-Encoding': 'chunked'
  })
  res.end('ok'.repeat(70000))
})
.listen(8088, () => {
  console.log(8088)
})