// common.js  es6  export default 
const admin = require('./admin')
module.exports = app => {
  // 启用路由中间件
  // 根路由
  // app.use('/', (req, res) => {
  //   res.send('hello');
  // })
  // 模块子路由
  
  app.use('/admin', admin)
}
