// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const result = await cloud.openapi.wxacode.getUnlimited({
      // blog.js的onLoad函数里options中获取
      scene: wxContext.OPENID,
      // page: "pages/blog/blog"

      // 生成二维码的颜色
      // lineColor: {
      //   'r': 211,
      //   'g': 60,
      //   'b': 57
      // },
      // // 背景是否透明
      // isHyaline: true
    })
  // console.log(result)
  const upload= await cloud.uploadFile({
      cloudPath: 'qrcode/' + Date.now() + '-' + Math.random() + '.png',
      fileContent: result.buffer
    })
  return upload.fileID
}