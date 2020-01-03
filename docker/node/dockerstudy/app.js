const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const logger = require('koa-logger');
const fs = require('fs');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
// 中间件式
// 分层
const index = require('./routes/index');

// 异常处理
onerror(app);
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}));
//静态资源服务访问
app.use(require('koa-static')(__dirname + '/public'))
app.use(views(__dirname + '/views', {
    extension: 'pug'
}));

// 日志生成
app.use(logger());

// 路由
app.use(index.routes(), index.allowedMethods())
// 模块化 COMMONJS规范
module.exports = app;