// const db = wx.cloud.database();
// const productsCollection = db.collection('du_products');
Page({
  data(){
      products:[]
  },
  onLoad(){
      wx.cloud.callFunction({
          name: 'getProducts'
      }).then(res =>{
        //   console.log(res);
          this.setData({
          products:res.result.data
          })
        })
  }
})