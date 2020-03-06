const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const moment = require('moment');
// mongoose
const ObjectId = mongoose.Types.ObjectId;
// console.log(typeof ObjectId);
const Todo = require('../models/todo');
// restful 
router.post('/', (req, res) => {
  // 存时间时， 给日期的字符串 html表单的提交 
  // console.log(req.body); //请求体
  Todo.create(req.body, (err, todo) => {
    if (err) {
      res.json(err)
    } else {
      res.json(todo)
    }
  }) //BSON doc
})

router.get('/:id', (req, res) => {
  const id = req.params.id; //?a=1&b=2 
  // console.log(id);
  Todo.findOne({
    "_id": ObjectId(id) // mongodb hash 
  }, (err, todo)=> {
    console.log(moment(todo.start).format('MMMM Do YYYY, h:mm:ss a'))
    res.json({
      err,
      todo
    })
  })
  
})
module.exports = router