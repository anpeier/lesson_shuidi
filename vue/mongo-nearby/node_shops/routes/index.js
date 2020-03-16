const express = require('express');
const shop = express.Router();
const db = require('../db/');
const Shop = require('../models/shop.js');

// 2d spare 是mongodb 内建的， 独有的功能
// 1. NOSQL 
// 2. 移动时代， 定位功能
shop.get('/', async(req, res) => {
  Shop
    .find({
      location: {
        $near: [28.4348600000,115.5390900000], // $ 在mongodb 里 函数
        $maxDistance: 0.05 //10公里 1 index 距离排序 
        // $lt $  
      } // mongodb 20 
    }).limit().exec(function(err, shops) {
      if (err) {
        console.log(err)
      }
      res.json(shops)
    })
})

shop.post('/', async(req, res) => {
  console.log('---shops');
  const gazx = new Shop({
    name: '高安中学',
    location: [28.4453741100,115.4155826700]
  });
  gazx
    .save((err, saved)=> {
      res.json({
        status:1,
        message: '插入成功'
      })
    })
});

module.exports =  (app) => {
  app.use('/shops', shop);
}

