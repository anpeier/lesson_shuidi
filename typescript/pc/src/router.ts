import { Router, Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import Crowller from "./utils/crowller";
import DellAnalyzer from "./utils/analyzer";
import { getResponseData } from "./utils/util";

interface bodyRequest extends Request {
  body: {
    [key: string]: string | undefined;
  };
}

const checkLogin = (req: Request, res: Response, next: NextFunction) => {
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
    next();
  } else {
    res.json(getResponseData(null, "请先登录"));
  }
};

const router = Router();

router.get("/", () => {});

router.get("/logout", (req: Request, res: Response) => {
  if (req.session) {
    req.session.login = undefined;
  }
  res.json(getResponseData(true));
});

router.post("/login", (req: bodyRequest, res: Response) => {
  const { password } = req.body;
  const isLogin = req.session ? req.session.login : false;
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
});

router.get("/getData", checkLogin, (req: bodyRequest, res: Response) => {
  const secret = "secretKey";
  const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
  const analyze = DellAnalyzer.getInstance();
  new Crowller(url, analyze);
  res.json(getResponseData(true));
});

router.get("/showData", checkLogin, (req: bodyRequest, res: Response) => {
  try {
    const position = path.resolve(__dirname, "../data/course.json");
    const result = fs.readFileSync(position, "utf-8");
    res.json(getResponseData(JSON.parse(result)));
  } catch (error) {
    res.json(getResponseData(false, "登录不存在"));
  }
});

export default router;
