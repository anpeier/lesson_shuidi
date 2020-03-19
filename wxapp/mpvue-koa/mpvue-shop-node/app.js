const Koa = require('koa')
const config = require('./config')
const route = require('./routes')
const koaBody = require('koa-body')
const app = new Koa()

// 接收post参数
app.use(koaBody({
    multipart: true
}))
app.use(route.routes())

app.listen(config.port, () => {
    console.log(`服务启动，端口${config.port}`)
})