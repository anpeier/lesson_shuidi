// pages/player/player.js
let musiclist = []
// 正在播放歌曲的index
let nowPlayingIndex = 0
// 获取全局唯一的背景音频管理器
const backgroundAudioManager = wx.getBackgroundAudioManager()
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picUrl: '',
    isPlaying: false, // false 表示不播放 true 表示播放
    isLyricShow: false, // 歌词是否显示
    lyric: '',
    isSame: false, // 是否为同一首歌
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    nowPlayingIndex = options.index
    musiclist = wx.getStorageSync('musiclist')
    this._loadMuiscDetail(options.musicId)
  },

  onShow: function() {
    backgroundAudioManager.onNext(() => {
      console.log('onNext')
      this.onNext()
    })
    backgroundAudioManager.onPrev(() => {
      console.log('onPrev')
      this.onPrev()
    })
  },

  // 获取歌曲数据
  _loadMuiscDetail(musicId){
    if(musicId == app.getPlayingMusicId()){
      this.setData({
        isSame: true
      })
    }else{
      this.setData({
        isSame: false
      })
    }
    if(!this.data.isSame){
      backgroundAudioManager.stop()
    }
    let music = musiclist[nowPlayingIndex]
    console.log(music)
    console.log(nowPlayingIndex)
    wx.setNavigationBarTitle({
      title: music.name,
      isPlaying: false
    })

    this.setData({
      picUrl: music.al.picUrl
    })

    app.setPlayingMusicId(musicId)

    wx.showLoading({
      title: '歌曲加载中'
    })
    wx.cloud.callFunction({
      name: 'music',
      data: {
        musicId, // 相当于 musicId : musicId,
        $url: 'musicUrl',
      }
    }).then((res) => {
      // console.log(res)
      console.log(JSON.parse(res.result))
      let result = JSON.parse(res.result)
      if(result.data[0].url == 'null'){
        wx.showToast({
          title: '无权限播放',
        })
        return
      }
      if(!this.data.isSame){
        backgroundAudioManager.src = result.data[0].url
        backgroundAudioManager.title = music.name
        backgroundAudioManager.coverImgUrl = this.data.picUrl
        backgroundAudioManager.singer = music.ar[0].name
        backgroundAudioManager.epname = music.al.name
        app.setIsPlaying(true)
        // 保存播放历史
        this.savePlayHistory()
      }

      if (app.getIsPlaying()) {
        this.setData({
          isPlaying: true
        })
      }
      
      wx.hideLoading()

      // 加载歌词
      wx.cloud.callFunction({
        name: 'music',
        data: {
          musicId,
          $url: 'lyric',
        }
      }).then((res) => {
        console.log(res)
        let lyric = '暂无歌词'
        const lrc = JSON.parse(res.result).lrc
        if(lrc){
          lyric = lrc.lyric
        }
        this.setData({
          lyric
        })
      })
    })
  },

  togglePlaying(){
    if(this.data.isPlaying){
      backgroundAudioManager.pause()
      app.setIsPlaying(false)
    }else{
      backgroundAudioManager.play()
      app.setIsPlaying(true)
    }
    this.setData({
      isPlaying: !this.data.isPlaying
    })
  },
  
  onPrev(){
    nowPlayingIndex--
    if(nowPlayingIndex < 0){
      nowPlayingIndex = musiclist.length - 1
    }
    this._loadMuiscDetail(musiclist[nowPlayingIndex].id)
  },
  onNext(){
    nowPlayingIndex++
    if(nowPlayingIndex === musiclist.length){
      nowPlayingIndex = 0
    }
    this._loadMuiscDetail(musiclist[nowPlayingIndex].id)
  },

  onChangeLyricShow(){
    this.setData({
      isLyricShow: !this.data.isLyricShow
    })
  },

  timeUpdate(event){
    this.selectComponent('.lyric').update(event.detail.currentTime)
  },

  onPlay(){
    this.setData({
      isPlaying: true
    })
  },

  onPause(){
    this.setData({
      isPlaying: false
    })
  },

  // 保存播放历史
  savePlayHistory() {
    // 当前正在播放的歌曲
    const music = musiclist[nowPlayingIndex]
    const openid = app.globalData.openid
    const history = wx.getStorageSync(openid)
    // let bHave = false
    for (let i = 0, len = history.length; i < len; i++) {
      if (history[i].id == music.id) {
        // bHave = true
        history.splice(i,1)
        // console.log(history)
        break
      }
    }
    history.unshift(music)
    wx.setStorage({
      key: openid,
      data: history,
    })
  }
})