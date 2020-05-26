"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var crowller_1 = __importDefault(require("./utils/crowller"));
var analyzer_1 = __importDefault(require("./utils/analyzer"));
var util_1 = require("./utils/util");
var checkLogin = function (req, res, next) {
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        next();
    }
    else {
        res.json(util_1.getResponseData(null, "请先登录"));
    }
};
var router = express_1.Router();
router.get("/", function () { });
router.get("/logout", function (req, res) {
    if (req.session) {
        req.session.login = undefined;
    }
    res.json(util_1.getResponseData(true));
});
router.post("/login", function (req, res) {
    var password = req.body.password;
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.json(util_1.getResponseData(false, "已经登陆"));
    }
    else {
        if (password === "123" && req.session) {
            req.session.login = true;
            res.json(util_1.getResponseData(true));
        }
        else {
            res.json(util_1.getResponseData(false, "登录失败"));
        }
    }
});
router.get("/getData", checkLogin, function (req, res) {
    var secret = "secretKey";
    var url = "http://www.dell-lee.com/typescript/demo.html?secret=" + secret;
    var analyze = analyzer_1.default.getInstance();
    new crowller_1.default(url, analyze);
    res.json(util_1.getResponseData(true));
});
router.get("/showData", checkLogin, function (req, res) {
    try {
        var position = path_1.default.resolve(__dirname, "../data/course.json");
        var result = fs_1.default.readFileSync(position, "utf-8");
        res.json(util_1.getResponseData(JSON.parse(result)));
    }
    catch (error) {
        res.json(util_1.getResponseData(false, "登录不存在"));
    }
});
exports.default = router;
