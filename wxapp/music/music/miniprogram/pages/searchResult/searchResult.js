// miniprogram/pages/searchResult/searchResult.js
let keyword = ''
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musiclist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    keyword = options.keyword
    this._search()
  },

  _search() {
    console.log(this.data.musiclist.length)
    wx.showLoading({
      title: '加载中'
    })
    wx.cloud.callFunction({
      name: 'music',
      data: {
        $url: 'searchMusic',
        key: keyword,
        offset: this.data.musiclist.length
      }
    }).then((res) => {
      console.log(res)
      let musiclist = res.result.result.songs

      for (let i = 0, len = musiclist.length; i < len; i++) {
        musiclist[i].al = {
          picUrl: musiclist[i].album.artist.img1v1Url,
          name: musiclist[i].album.name
        }
        musiclist[i].ar = []
        musiclist[i].ar.push({name: musiclist[i].artists[0].name})
      }

      this.setData({
        musiclist: this.data.musiclist.concat(musiclist)
      })

      this._setMusiclist()
      wx.stopPullDownRefresh()
      wx.hideLoading()
      console.log(this.data.musiclist)
    })
  },

  _setMusiclist(){
    wx.setStorageSync('musiclist',this.data.musiclist)
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
    this.setData({
      musiclist: []
    })
    this._search()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this._search()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})