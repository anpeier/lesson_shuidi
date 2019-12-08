const MAX_LIMIT = 15
Page({
    data:{
        swiperImgUrls: [
            {
                url: 'http://p1.music.126.net/oeH9rlBAj3UNkhOmfog8Hw==/109951164169407335.jpg',
          },
          {
                url: 'http://p1.music.126.net/xhWAaHI-SIYP8ZMzL9NOqg==/109951164167032995.jpg',
          },
          {
                url: 'http://p1.music.126.net/Yo-FjrJTQ9clkDkuUCTtUg==/109951164169441928.jpg',
          }
        ],
        playlist:[]
    },

    onLoad: function (options) {
        this._getPlaylist()
    },

    onReachBottom: function () {
        this._getPlaylist()
    },

    onPullDownRefresh: function(){
        this.setData({
            playlist: []
        })
        this._getPlaylist()
    },

    _getPlaylist(){
        wx.showLoading({
            title: '加载中',
        })
        wx.cloud.callFunction({
            name: 'music',
            data: {
                start: this.data.playlist.length,
                count: MAX_LIMIT,
                $url: 'playlist'
            }
        }).then((res) => {
            // console.log(res)
            this.setData({
                playlist: this.data.playlist.concat(res.result.data)
            })
            wx.stopPullDownRefresh()
            wx.hideLoading()
        })
    }
})