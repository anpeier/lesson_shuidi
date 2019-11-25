// const express = require('express');
// // 模板引擎
// const ejs = require('ejs');
// const app = express();

// var MongoClient = require('mongodb').MongoClient;
// // mongodb 连接使用mongodb:// 协议来 27017端口
// // mysql 3306
// var url = 'mongodb://192.168.31.128:27017//runoob';
// var dbbase;
// MongoClient.connect(url,{
//     useNewUrlParser: true
// },function(err,db){
//     if(err){
//         throw err;
//     }
//     // console.log('数据库已创建！')
//     dbbase = db.db("runoob");
// });

// app.get('/',(req,res) => {
//     dbbase.collection("lap_site")
//         .find({"name": "anpeier"})
//         .toArray(function(err,result){
//             if(err)
//                 throw err;
//             console.log(result);
//             // db.close();
//             ejs.renderFile("views/index.html",{
//                 title:'hello',
//                 items: result
//             },function(err,data){
//                 res.send(data);
//             })
//         })
// })
// app.listen(1314)

const express = require('express');
//模板引擎
const ejs = require('ejs');
const app = express();
var MongoClient = require('mongodb').MongoClient;
// mongodb 连接是用mongodb:// 协议来  27017端口
// mysql 3306
var url = 'mongodb://192.168.31.128:27017/runoob';
var dbbase;
MongoClient.connect(url, {useNewUrlParser:true},{
  useNewUrlParser: true
}, function(err, db) {
  if (err) {
    throw err;
  }
  // console.log('数据库已创建！');
  dbbase = db.db("runoob");
  // console.log(dbbase);
});
app.get('/', (req, res) => {
  dbbase.collection("ysw_site")
    .find({"name":"潘志伟"})
    .toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      // db.close();
      
      ejs.renderFile("views/index.html", {
        title: 'hello',
        items: result
      }, function(err, data) {
          console.log(err);
          console.log(data);
        res.end(data);
      })


    })

  
})
app.listen(1314);
