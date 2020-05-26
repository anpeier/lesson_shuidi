"use strict";
// import "reflect-metadata";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.Controller = void 0;
function Controller(target) {
    for (var key in target.prototype) {
        console.log(Reflect.getMetadata("path", target.prototype, key));
    }
}
exports.Controller = Controller;
function get(path) {
    return function (target, key) {
        Reflect.defineMetadata("path", path, target, key);
    };
}
exports.get = get;
