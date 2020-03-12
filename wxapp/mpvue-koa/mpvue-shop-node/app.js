const Koa = require('koa')
const config = require('./config')
const route = require('./routes')
const app = new Koa()

app.use(route.routes())

app.listen(config.port, () => {
    console.log(`服务启动，端口${config.port}`)
})