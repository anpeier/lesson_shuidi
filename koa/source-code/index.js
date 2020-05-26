const Koa = require("./lib/application");

let app = new Koa();

app.use((ctx) => {
  // 放弃ctx 对象的构建
  // res.end('hello')
  // es6 方法？
  // ctx -> ctx.req -> requset -> req
  console.log(ctx.req.url);
  console.log(ctx.request.req.url);
  console.log(ctx.response.req.url);
  console.log(ctx.request.url, "++++++++++");
  console.log(ctx.request.path, "---------");
  console.log(ctx.url, "xxxxxxxxxx");
  console.log(ctx.path);
  ctx.body = "hello world";
});

app.listen(3000);
