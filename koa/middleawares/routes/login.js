const Router = require('koa-router');
const router = new Router({
  prefix: '/login'
});

router.get('/', async (ctx) => {
  ctx.body = '登录成功'
})

module.exports = router