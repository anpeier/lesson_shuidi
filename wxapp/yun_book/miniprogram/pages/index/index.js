Page({
  // data:{
  //   qrCodeMsg:''
  // },
  scanCode(){
    wx.scanCode({
      onlyFromCamera: true,
      scanType: ['qrCode','barCode'],
      success: res => {
        // console.log(res);
        // this.setData({
        //   qrCodeMsg: res.result
        // });
        // wx.showToast({
        //   title: JSON.stringify(res.result),
        //   duration: 10000
        // })
        let isbn = res.result;
        // isbn -> 到云里查询
        wx.cloud.callFunction({
          name:'bookinfo',
          data:{
            isbn: isbn
          },
          success:res => {
            console.log(res.result);
          }
        })
      }
    })
  }
})