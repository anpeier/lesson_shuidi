/* eslint-disable strict */
const Service = require('egg').Service;
const crypto = require('crypto');
const uuid = require('uuid');

class UserService extends Service {
  async register(user) {
    const { ctx } = this;
    console.log(user, 'service');
    // 密码绝对不能存明文 单向加密
    user.password = crypto.createHmac('sha256', 'cxk1728cn')
      .update(user.password)
      .digest('hex');

    // user.user_id = uuid.v4().replace(/-/g,'');
    const userInfo = await this.ctx.model.User.create(user);

    ctx.body = {
      msg: '注册成功',
      userInfo
      // user_id: user.user_id
    };
  }
}

module.exports = UserService;
