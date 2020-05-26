import "reflect-metadata";
import { Request, Response } from "express";
import { Controller, get } from "./decorator";

interface bodyRequest extends Request {
  body: {
    [key: string]: string | undefined;
  };
}

@Controller
class LoginController {
  @get("/login")
  login() {}

  @get("/")
  home(req: bodyRequest, res: Response) {
    const isLogin = req.session ? req.session.login : false;
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
