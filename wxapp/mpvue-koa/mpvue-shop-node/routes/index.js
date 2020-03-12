const router = require('koa-router')({
  prefix: '/lm'
})
const controllers = require('../controllers')

router.get('/index/index', controllers.home.index)

module.exports = router