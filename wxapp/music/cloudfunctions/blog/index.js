// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const tcbRouter = require('tcb-router')
const db = cloud.database()
const blogCollection = db.collection('blog')

const MAX_LIMIT = 100

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  const app = new tcbRouter({
    event
  })

  app.router('list', async (ctx, next) => {
    const keyword = event.keyword
    let w = {}
    if (keyword.trim() != '') {
      w = {
        content: db.RegExp({
          regexp: keyword,
          options: 'i'
        })
      }
    }

    ctx.body = await blogCollection.where(w).skip(event.start)
      .limit(event.count)
      .orderBy('createTime', 'desc')
      .get().then((res) => {
        return res.data
      })
  })

  app.router('detail', async(ctx, next) => {
    let blogId = event.blogId
    // 详情查询
    let detail = await blogCollection.where({
      _id: blogId
    }).get().then((res) => {
      return res.data
    })

    // 评论信息
    const countResult = await blogCollection.count()
    // countResult 对象型 .total转化成数字
    const total = countResult.total
    let commentList = {
      data: []
    }

    if (total > 0) {
      // 取到查询次数
      const batchTimes = Math.ceil(total / MAX_LIMIT)
      const tasks = []
      for (let i = 0; i < batchTimes; i++) {
        let promise = db.collection('blog-comment').skip(i * MAX_LIMIT)
        .limit(MAX_LIMIT).where({
          blogId
        }).orderBy('createTime', 'desc').get()
        tasks.push(promise)
      }
      if (tasks.length > 0) {
        commentList = (await Promise.all(tasks)).reduce((acc, cur) => {
          return {
            data: acc.data.concat(cur.data)
          }
        })
      }
    }

    ctx.body = {
      commentList,
      detail,
    }
  })

  const wxContext = cloud.getWXContext()
  app.router('getListByOpenid', async(ctx, next) => {
    ctx.body = await blogCollection.where({
        _openid: wxContext.OPENID,
      }).skip(event.start).limit(event.count)
      .orderBy('createTime', 'desc').get().then((res) => {
        return res.data
      })
  })

  return app.serve()
}