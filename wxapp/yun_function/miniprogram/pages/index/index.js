Page({
  http(){
    // 要去其他网站拿数据
    // 上云 计算能力特别强 前端，后端合作的
    wx.cloud.callFunction({
      name:'http',
    })
    // 从云下来
    .then(res => {
      console.log(res);
    })
  }
})