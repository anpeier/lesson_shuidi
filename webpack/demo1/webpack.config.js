// console.log(process.env.NODE_ENV)
const path = require('path')
// 开发时，vue-cli， webpack 内存中编译
// 上线时，压缩 优化 分离
const rimraf = require('rimraf')
rimraf.sync('dist'); // 删除目录 编译之前删除已有的目录
module.exports = {
  entry: './src/main', // 入口文件
  mode: process.env.NODE_ENV, // 模式 development production 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')
  }
}