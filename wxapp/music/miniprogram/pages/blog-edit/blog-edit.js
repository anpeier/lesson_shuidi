// 输入文字最大个数
const MAX_WORDS_NUM = 140
// 最大上传图片数量
const MAX_IMG_NUM = 9

const db = wx.cloud.database()
// 输入文字内容
let content = ''
// 用户信息
let userInfo = {}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 输入文字个数
    wordsNum: 0,
    footerBottom: 0,
    images: [],
    selectPhoto: true, // 添加图片元素是否显示
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    userInfo = options
  },

  onInput(event) {
    // console.log(event)
    let wordsNum = event.detail.value.length
    if (wordsNum >= MAX_WORDS_NUM) {
      wordsNum = `最大字数为${MAX_WORDS_NUM}`
    }
    this.setData({
      wordsNum
    })
    content = event.detail.value
  },
  onFocus(event) {
    // console.log(event)
    this.setData({
      footerBottom: event.detail.height
    })
  },
  onBlur() {
    this.setData({
      footerBottom: 0
    })
  },
  onChooseImage() {
    // 还能选择图片的张数
    let max = MAX_IMG_NUM - this.data.images.length
    wx.chooseImage({
      count: max,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'cemera'],
      success: (res) => {
        // console.log(res)
        this.setData({
          images: this.data.images.concat(res.tempFilePaths)
        })
        max = MAX_IMG_NUM - this.data.images.length
        this.setData({
          selectPhoto: max <= 0 ? false : true
        })
      }
    })
  },
  onDeleteImg(event) {
    this.data.images.splice(event.target.dataset.index,1)
    this.setData({
      images: this.data.images,
      selectPhoto: true
    })
  },
  onPreView(event) {
    let imgIndex = event.target.dataset.imageindex
    console.log(event)
    wx.previewImage({
      urls: this.data.images,
      current: this.data.images[imgIndex]
    })
  },
  send() {
    // 2.数据 -> 云数据库
    // 数据库：内容、图片 图片fileId openId、昵称、头像、时间
    // 1.图片 -> 云存储 fileId云文件ID
    
    if (content.trim() === '' && this.data.images.length === 0) {
      wx.showModal({
        title: '请输入内容',
        content: '',
      })
      return
    }
    
    wx.showLoading({
      title: '发布中',
    })

    let fileIds = [] // 上传图片在云存储的fileId集
    let promiseArr = []
    //图片上传
    for (let i = 0, len = this.data.images.length; i < len; i++) {
      let p = new Promise((resolve, reject) => {
        let item = this.data.images[i]
        // 文件扩展名
        let suffix = /\.\w+$/.exec(item)[0]
        // 将图片保存到云存储
        wx.cloud.uploadFile({
          cloudPath: 'blog/' + Date.now() + '-' + Math.random() * 10000000 + suffix,
          filePath: item,
          success: (res) => {
            console.log(res)
            fileIds = fileIds.concat(res.fileID)
            console.log(fileIds)
            resolve()
          },
          fail: (err) => {
            console.log(err)
            reject()
          }
        })
      })
      promiseArr.push(p)
    }
    // 存入云数据库
    Promise.all(promiseArr).then((res) => {
      db.collection('blog').add({
        data: {
          ...userInfo,
          content,
          img: fileIds,
          createTime: db.serverDate(), // 服务端时间         
        }
      }).then((res) => {
        wx.hideLoading()
        wx.showToast({
          title: '发布成功',
        })
        //返回blog页面,并且刷新
        wx.navigateBack()
      })
    }).catch((err) => {
        wx.hideLoading()
        wx.showToast({
          title: '发布失败'
        })
      })
  },
})