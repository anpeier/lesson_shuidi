import "reflect-metadata";
import { Request, Response } from "express";
import { controller, post, get } from "../decorator";
import { getResponseData } from "../utils/util";

interface bodyRequest extends Request {
  body: {
    [key: string]: string | undefined;
  };
}

@controller("/")
export class LoginController {
  static isLogin(req: bodyRequest): boolean {
    return !!(req.session ? req.session.login : false);
  }
  @post("/login")
  login(req: bodyRequest, res: Response) {
    const { password } = req.body;
    const isLogin = LoginController.isLogin(req);
    if (isLogin) {
      res.json(getResponseData(false, "已经登陆"));
    } else {
      if (password === "123" && req.session) {
        req.session.login = true;
        res.json(getResponseData(true));
      } else {
        res.json(getResponseData(false, "登录失败"));
      }
    }
  }

  @get("/logout")
  logout(req: bodyRequest, res: Response) {
    if (req.session) {
      req.session.login = undefined;
    }
    res.json(getResponseData(true));
  }

  @get("/")
  home(req: bodyRequest, res: Response) {
    const isLogin = LoginController.isLogin(req);
    if (isLogin) {
      res.send(`
    <html>
      <body>
        <a href="getData">爬取内容</a>
        <a href="showData">展示内容</a>
        <a href="logout">退出</a>
      </body>
    </html>
  `);
    } else {
      res.send(`
    <html>
      <body>
        <form method="post" action="/login">
          <input type="password" name="password" />
          <button>提交</button>
        </form>
      </body>
    </html>
  `);
    }
  }
}
