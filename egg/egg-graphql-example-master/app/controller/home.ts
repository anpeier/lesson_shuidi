import { Controller } from "egg";

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    const { config } = this.app;
    const data = {
      client_id: config.github.client_id,
      scope: config.github.scope,
    };
    // 模板渲染
    // 1. ejs模板引擎
    // 2. 解析模板
    await ctx.render('login.html',data)
    console.log(data);
  }
}
