// components/blog-ctrl/blog-ctrl.js
let userInfo = {}
const db = wx.cloud.database()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    blogId: String,
  },
  externalClasses: ['iconfont', 'icon-pinglun', 'icon-fenxiang'],

  /**
   * 组件的初始数据
   */
  data: {
    // 登录组件是否显示
    loginShow: false,
    // 底部弹出层是否显示
    modalShow: false,
    content: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onComment() {
      // 判断用户是否授权
      wx.getSetting({ // 获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限
        success: (res) => {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: (res) => {
                userInfo = res.userInfo
                // 显示评论弹出层
                this.setData({
                  modalShow: true
                })
              }
            })
          } else {
            this.setData({
              loginShow: true
            })
          }
        }
      })
    },
    onLoginsuccess(event) {
      console.log(event)
      userInfo = event.detail
      this.setData({
        modalShow: true
      })
    },
    onLoginFail() {
      wx.showModal({
        title: '授权用户才能评论',
        content: ''
      })
    },
    onInput(event) {
      // console.log(event.detail.value)
      this.setData({
        content: event.detail.value
      })
    },
    onSend() {
      // 插入数据库
      let content = this.data.content
      let blogId = this.properties.blogId
      if (content.trim() == '') {
        wx.showModal({
          title: '评论内容不能为空',
          content: '',
        })
        return
      }
      wx.showLoading({
        title: '评论中',
        mask: true,
      })
      // console.log(this.properties.blogId)
      db.collection('blog-comment').add({
        data: {
          content,
          blogId,
          createTime: db.serverDate(),
          nickName: userInfo.nickName,
          avatarUrl: userInfo.avatarUrl
        }
      }).then((res) => {

        // 推送模板消息
        wx.requestSubscribeMessage({
          tmplIds: ['3E59Tvc0gay5XMHRCDceyebhAjSx5X1CpQaUWGXs6rk'],
          success (res) { 
            wx.cloud.callFunction({
            name: 'sendMessage',
            data: {
              content,
              blogId,
              nickName: userInfo.nickName
            }
            }).then((res) => {
              console.log(res)
            })
          }
        })

        wx.hideLoading()
        wx.showToast({
          title: '评论成功'
        })
        this.setData({
          modalShow: false,
          content: '',
        })
      })

    },
  }
})
