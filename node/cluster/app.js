const fs = require('fs');
const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(fs.readFileSync(__dirname + '/index.html', 'utf-8'));
})
.listen(1534, () => {
    // console.log('listened 1534');
})