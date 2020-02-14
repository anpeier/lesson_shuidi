// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  const wxContext = cloud.getWXContext()

  const result = await cloud.openapi.subscribeMessage.send({
    touser: wxContext.OPENID,
    page: `/pages/blog-comment/blog-comment?blogId=${event.blogId}`,
    data: {
      thing2: {
        value: event.content
      },
      name3: {
        value: event.nickName
      }
    },
    templateId: '3E59Tvc0gay5XMHRCDceyebhAjSx5X1CpQaUWGXs6rk',
    formId: event.formId
  })
  return result
}