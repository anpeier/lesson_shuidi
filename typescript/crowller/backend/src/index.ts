import express from "express";
import bodyParser from "body-parser";
import "./controller/LoginController";
import "./controller/CrowllerController";
import router from "./router";
import cookieSession from "cookie-session";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cookieSession({
    name: "session",
    keys: ["anpeier"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);
app.use(router);
app.listen(7001, () => {
  console.log("服务启动成功");
});
