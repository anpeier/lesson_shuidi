const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const logger = require('koa-logger');
const fs = require('fs');
const onerror = require('koa-onerror');
// 中间件式
// 分层
const index = require('./routes/index');

onerror(app);
app.use(ctx => {
    ctx.body = fs.createReadStream('dffaa');
})
app.use(views(__dirname + '/views', {
    extension: 'pug'
}));
app.use(logger());
app.use(index.routes(), index.allowedMethods())
// 模块化 COMMONJS规范
module.exports = app;