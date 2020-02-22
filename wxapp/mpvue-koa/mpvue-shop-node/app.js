const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

app.use(router.routes())

app.listen(3000, () => {
    console.log('服务启动，端口3000')
})