"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var decorator_1 = require("./decorator");
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.login = function () { };
    LoginController.prototype.home = function (req, res) {
        var isLogin = req.session ? req.session.login : false;
        if (isLogin) {
            res.send("\n    <html>\n      <body>\n        <a href=\"getData\">\u722C\u53D6\u5185\u5BB9</a>\n        <a href=\"showData\">\u5C55\u793A\u5185\u5BB9</a>\n        <a href=\"logout\">\u9000\u51FA</a>\n      </body>\n    </html>\n  ");
        }
        else {
            res.send("\n    <html>\n      <body>\n        <form method=\"post\" action=\"/login\">\n          <input type=\"password\" name=\"password\" />\n          <button>\u63D0\u4EA4</button>\n        </form>\n      </body>\n    </html>\n  ");
        }
    };
    __decorate([
        decorator_1.get("/login"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "login", null);
    __decorate([
        decorator_1.get("/"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "home", null);
    LoginController = __decorate([
        decorator_1.Controller
    ], LoginController);
    return LoginController;
}());
