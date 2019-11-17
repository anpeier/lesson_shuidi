// pages/vehicles/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    entity:{},
    "slides": [
      {
        "id": 5,
        "header": "全新一代发现",
        "sub_header": "Discovery",
        "description": "全尺寸七座 SUV，现已接受预订。",
        "image": "https://resources.ninghao.net/landrover/discover-1.jpg"
      },
      {
        "id": 3,
        "header": "全新揽胜星脉",
        "sub_header": "Range Rover",
        "description": "标新立异的前卫揽胜。",
        "image": "https://resources.ninghao.net/landrover/velar-1.jpg"
      },
      {
        "id": 6,
        "header": "发现神行",
        "sub_header": "Discovery",
        "description": "发现的绝佳时刻。",
        "image": "https://resources.ninghao.net/landrover/discovery-sport-1.jpg"
      }
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*console.log(options);*/
    const id =options.id;
    this.data.slides.forEach(slide=>{
      if(slide.id ==id){
        this.setData({
          entity:slide
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})