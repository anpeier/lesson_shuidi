const Router = require('koa-router')
const router = new Router()

router.get('/index', (ctx) => {
  ctx.body = 'hello world'
})

module.exports = router