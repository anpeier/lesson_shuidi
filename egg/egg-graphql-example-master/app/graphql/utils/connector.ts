import { Context } from "egg"; // 上下文对象

export default class UtilsConnector {
  constructor(public ctx: Context) {
    this.ctx = ctx;
  }
  public githubURL() {
    const { login_url, client_id, scope } = this.ctx.app.config.github;
    console.log(login_url, client_id, scope);
    return `${login_url}?client_id=${client_id}&scope=${scope}&state=${Date.now()}`;
  }
}
