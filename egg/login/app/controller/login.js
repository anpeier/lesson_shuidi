const Controller = require('egg').Controller
class LoginController extends Controller{
    
    async register(){
        // 异步 存一条数据
        const { ctx } = this;
        const { password, username, email } = ctx.request.body;
        // service层 数据存储服务
        // ctx.body = " hi,egg ";
        await ctx.service.user.register({password, username, email})
    }

    async loginIn(){
        const { ctx } = this;
        // 用户名 密码 ctx req res
        // console.log(ctx.request.body);
        const { email , password } = ctx.request.body;
        console.log(email , password)
        ctx.body = " 登陆成功 ";
    }

}

module.exports = LoginController;