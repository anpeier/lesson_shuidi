const router = require('koa-router')({
  prefix: '/lm'
})
const controllers = require('../controllers')

// 首页接口
router.get('/index/index', controllers.home.index)

// 搜索接口
router.post('/search/addhistoryaction',controllers.search.index.addHistoryAction)
router.get('/search/indexaction',controllers.search.index.indexAction)

module.exports = router