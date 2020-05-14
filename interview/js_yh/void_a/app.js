var http = require("http");

http.createServer((req, res) => {
  if (req.url == "/new_page_not_go") {
    res.writeHead(204);
    return;
  }
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  res.write("hello world");
  res.end(`
    <html>
      <head>
        <body>
          <a href="/new_page_not_go">去新的页面</a>
        </body>
      </head>
    </html>
  `);
}).listen(3000)
