import { Controller } from "egg";

export default class UserController extends Controller {
  public async githublogin() {
    console.log(this.ctx.query.code)
  }
}
