var http = require("http");

http
  .createServer(function (req, res) {
    // 一份代码，满足后端两种需求
    // 1.axios proxy /api/posts 前后端分离 mvvm  响应头 text/json
    // 2.传统的后端驱动型开发 html  mysql + 套页面 mvc 相应头 text/html

    // 后端视角
    // mysql 取出的数据
    let posts = [
      {
        id: "1",
        title: "排查",
      },
      {
        id: "2",
        title: "难搞",
      },
    ];
    if (req.url === "/posts") {
      if (req.headers["content-type"] === "text/json") {
        // 头部
        // vue/react
        // api 很灵活
        res.end(JSON.stringify(posts));
      } else {
        // 后端自己建站 mvc
        let postHTML = posts
          .map(
            (post) =>
              `<li>
          ${post.id}
          ${post.title}
        </li>`
          )
          .join("");
        res.writeHead(200, { "content-type": "text/html;charset=utf8" });
        res.end(`
        <html>
          <head></head>
          <body>
            <ul>
              ${postHTML}
            </ul>
          </body>
        </html>
      `);
      }
    }
    res.end("hello world");
  })
  .listen(1314);
