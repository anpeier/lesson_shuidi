const db = wx.cloud.database();
const productsCollection = db.collection('products');
Page({
    data(){
        products:[]
    },
    onLoad(){
        productsCollection
            .get()
            .then(res =>{
                this.setData({
                    products:res.data
                })
                console.log(res.data);
            })
    }
})