const express = require('express');
const orders = express.Router();
const db = require('../db/db.js');
const Order = require('../models/order.js');

http://localhost:3000/orders?page=1&limit=20
// 10 万   120M   a  取第几页  page  limit 
// 0  offset skip 9  8*limit   limit 20

orders.get('/', (req, res) => {
  // res.json({
  //   mes: "ok"
  // })
  // 总数， 分页  total  10 
  // page  limit   result 
  let { page = 1, limit = 20 } = req.query; //业务经验
  page = parseInt(page);
  limit = parseInt(limit);
  // res.json({
  //   page, 
  //   limit
  // })
  Order.countDocuments({}, (err, count) => {
    if (err) {
      res.json({
        status: 400,
        msg: JSON.stringify(err)
      })
    } else {
      Order
        .find({})
        .skip((page - 1)*limit) // 游标
        .limit(limit) // 取多少条
        .sort({
          'orderDate': -1
        })
        .exec((err, docs) => {
          if (err) {
            res.json({
              status: 400,
              msg: JSON.stringify(err)
            })
          } else {
            res.json({
              status: 200,
              result: docs,
              total: count,
              msg:'OK'
            })
          }
        })
    }
    // count 拿下

  })  // count  查总数 独立于列表查询
})

module.exports =  (app) => {
  app.use('/orders', orders);
}