const Koa = require('koa')
const Router = require('koa-router')
const config = require('./config')
const route = require('./routes')

const app = new Koa()
const router = new Router()

router.get('/', (ctx) => {
    ctx.body = '首页'
})

// router.use('/test', route.routes())

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(config.port, () => {
    console.log(`服务启动，端口${config.port}`)
})