// 云函数入口文件
const cloud = require('wx-server-sdk')
const TcbRouter = require('tcb-router')
const rp = require('request-promise')

const BASE_URL = 'http://musicapi.xiecheng.live'

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  const app = new TcbRouter({
      event
  })

  app.router('playlist', async(ctx,next) => {
    ctx.body = await cloud.database().collection('playlist')
      .skip(event.start)  // 返回的起始位置
      .limit(event.count) // 返回结果条数 小程序端默认20,最大20 云函数 默认且最大100
      .orderBy('createTime', 'desc')
      .get()
      .then((res) => {
        return res
      })
  })

  app.router('musiclist', async(ctx, next) => {
    ctx.body = await rp(BASE_URL + '/playlist/detail?id=' + parseInt(event.playlistId))
    .then((res) => {
      return JSON.parse(res)
    })
  })

  app.router('musicUrl', async(ctx,next) => {
    ctx.body = await rp(BASE_URL + `/song/url?id=${event.musicId}`).then((res) => {
      return res
    })
  })

  app.router('lyric', async(ctx, next) => {
    ctx.body = await rp(BASE_URL + `/lyric?id=${event.musicId}`).then((res) => {
      return res
    })
  })

  app.router('searchMusic', async(ctx, next) => {
    let key = encodeURI(event.key)
    console.log(BASE_URL + `/search/?keywords=${key}`)
    ctx.body = await rp(BASE_URL + `/search/?keywords=${key}&offset=${event.offset}`)
    .then((res) => {
      return JSON.parse(res)
    })
  })

  return app.serve()
}