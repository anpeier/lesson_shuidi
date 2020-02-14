const Router = require('koa-router')
const router = new Router()
const callCloudFn = require('../utils/callCloudFn')
const callCloudDB = require('../utils/callCloudDB')

router.get('/list', async(ctx, next) => {
    console.log('查询歌单列表')
    const query = ctx.request.query
    const res = await callCloudFn(ctx, 'music', {
        $url: 'playlist',
        start: parseInt(query.start),
        count: parseInt(query.count)
    })
    let data = []
    if (res.resp_data) {
        data = JSON.parse(res.resp_data).data
    }
    ctx.body = {
        data,
        code: 20000
    }
})

router.get('/getById', async(ctx, next) => {
    const id = ctx.request.query.id
    const query = `db.collection('playlist').where({id:${id}}).get()`
    const res = await callCloudDB(ctx, 'databasequery', query)
    ctx.body = {
        code: 20000,
        data: JSON.parse(res.data)
    }
})

router.post('/updatePlaylist', async(ctx, next) => {
    const params = ctx.request.body
    console.log(params)
    const query = `
       db.collection('playlist').where({_id:'${params._id}'}).update({
           data: {
               name: '${params.name}',
               copywriter: '${params.copywriter}'
           }
       })
    `
    const res = await callCloudDB(ctx, 'databaseupdate', query)
    console.log(res)
    ctx.body = {
        code: 20000,
        data: res
    }
})

router.get('/del', async(ctx, next) => {
    console.log('执行删除操作')
    const params = ctx.request.query
    const query = `db.collection('playlist').where({_id:'${params.id}'}).remove()`
    const res = await callCloudDB(ctx, 'databasedelete', query)
    ctx.body = {
        code: 20000,
        data: res
    }
})
module.exports = router