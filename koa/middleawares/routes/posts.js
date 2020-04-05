const Router = require('koa-router');
const router = new Router({
  prefix: '/posts'
});
const auth = require('../middlewares/auth.js');


// const auth = (ctx, next) => {
//   if (!isLogged) {
//     ctx.redirect('/login');
//   } else {
//     next();
//   }
// }

router.get('/', async (ctx) => {
  ctx.body = '文章列表'
})

// check 一下又没有登录？ 
// post 中间件， 鉴权， 可以单独的交给一个中间件去做
router.post('/', auth,  async (ctx) => {
  // ctx.redirect('/login');
  ctx.body = '报存成功'
})

module.exports = router