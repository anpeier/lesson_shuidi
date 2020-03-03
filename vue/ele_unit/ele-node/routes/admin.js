const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  // 登录业务忽略
  res.send({
    status: 1,
    message: '登录成功'
  })
})

module.exports = router