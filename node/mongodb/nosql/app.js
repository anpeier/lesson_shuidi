// mongodb 数据库驱动
var MongoClient = require('mongodb').MongoClient;
// mongodb 连接使用mongodb:// 协议来 27017端口
// mysql 3306
var url = 'mongodb://192.168.31.128:27017//runoob';
// var url = 'mongodb://127.0.0.1:27017//test';
MongoClient.connect(url,{
    useNewUrlParser: true
},function(err,db){
    if(err){
        throw err;
    }
    // console.log('数据库已创建！')
    var dbbase = db.db("runoob");

    // 查询数据库是异步 回调方案
    // dbbase.createCollection('lap_site',function(err,res){
    //     // 回调先处理错误
    //     if(err){
    //         throw err;
    //     }
    //     console.log('创建了集合')
    //     db.close();
    // });
    // db.close(); 异步 在执行查询数据库时会继续向后执行，会发生
    // Cannot use a session that has ended(无法使用已结束的会话) 错误

    // 插入数据
    // JSON Object
    // var myObj = {name: 'anpeier',url: 'www.runoob'};
    // dbbase
    //     .collection("lap_site")
    //     .insertOne(myObj,function(err,res){
    //         if(err)
    //             throw err;
    //         console.log('文档插入成功');
    //         db.close();
    //     })
    dbbase.collection("lap_site")
        .find({"name": "anpeier"})
        .toArray(function(err,result){
            if(err)
                throw err;
            console.log(result);
            db.close();
        })
})
