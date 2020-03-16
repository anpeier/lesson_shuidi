const mongoose = require('mongoose')

// 5G时代， 机器收集的， 数据 mongodb 
// 比mysql 更优秀， 
// mysql 数据表提前设计好， 字段， 数据库三大范式
// mongodb doc 文档 存储的内容是动态的， 
// 1. 没有创建表？  {} => save 存到collection
// NOSQL   SQL 语句的语法
//   移动时代， 5GAI时代

const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // 必填
    // index: true
  },
  location: {  // lbs  latitude , longtide
    type: [Number], // [120.000, 23.444]
    index: "2d",  // ? 用来干嘛的？ 索引
    // 稀疏索引(或者称间隙索引)就是只包含有索引字段的文档的条目，
    // 即使索引字段包含一个空值。
    // 也就是说间隙索引可以跳过那些索引键不存在的文档。
    // 因为他并非包含所有的文档，因此称为稀疏索引。
    // 与之相对的非稀疏索引或者说普通索引则包含所有的文档以及
    // 为那些不包含索引的字段存储null值。
    sparse: true // 稀疏索引
  }
})

const Shop = mongoose.model('Shop', shopSchema)

module.exports = Shop;