// 唯一的入口， 做唯一一次es5模块化
// 挂载es6高级能力 开挂 es6 模块化
// 写的时候用es6 import -> babel 编译成es5  require -> node 运行
require("@babel/register");
require('./app.js');
