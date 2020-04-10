const { findSync } = require("../lib");
const Config = require("webpack-chain");
const config = new Config(); // 配置实例
const path = require("path");
const resolve = (src) => {
  return path.join(process.cwd(), src);
};
const files = findSync("config");
console.log(files);
module.exports = () => {
  // console.log("在这里基本配置");
  const map = new Map(); // es6 Map Json 区别
  files.map((file) => {
    const name = file.split("/").pop().replace(".js", "");
    // console.log(name, "------------");
    // path babelLoader.js require 引入 闭包函数
    return map.set(name, require(file)(config, resolve));
  });
  // console.log(map);
  // webpack modules

  // 分模块的配置
  map.forEach((v) => v()); // 运行配置
  return config;
};
