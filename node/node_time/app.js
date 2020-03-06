const express = require('express');
const app = express();
const config = require('./config');
const bodyParser = require('body-parser');
const todo = require('./router/index');
const mongoose = require('mongoose');
mongoose.connect(config.mongodb);
// 1. port 端口
// 2. 数据库连接

// 中间件， 比路由更早去处理http请求头数据的收集
// 字节流  on('data'). on('loaded')
// 第一次发送的是请求头，url length 
// 每次到达后，
app.use(bodyParser.json()) //post  get  next   req res next 
app.use(bodyParser.urlencoded({ extended: true}))

app.use('/todo', todo);

app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`);
})