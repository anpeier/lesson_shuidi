// pages/player/player.js
let musiclist = []
// 正在播放歌曲的index
let nowPlayingIndex = 0
// 获取全局唯一的背景音频管理器
const backgroundAudioManager = wx.getBackgroundAudioManager()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    picUrl: '',
    isPlaying: false, // false 表示不播放 true 表示播放
    isLyricShow: false, // 歌词是否显示
    lyric: ''
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

  // 获取歌数据
  _loadMuiscDetail(musicId){
    backgroundAudioManager.stop()
    let music = musiclist[nowPlayingIndex]
    // console.log(music)
    console.log(nowPlayingIndex)
    wx.setNavigationBarTitle({
      title: music.name,
      isPlaying: false
    })
    this.setData({
      picUrl: music.al.picUrl
    })
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
      backgroundAudioManager.src = result.data[0].url
      backgroundAudioManager.title = music.name
      backgroundAudioManager.coverImgUrl = music.al.picUrl
      backgroundAudioManager.singer = music.ar[0].name
      backgroundAudioManager.epname = music.al.name
      this.setData({
        isPlaying: true
      })
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
    }else{
      backgroundAudioManager.play()
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
})