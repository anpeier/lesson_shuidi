const fs = require("fs");
const util = require("util");

fs.readFile("./reduce2map.js", { encoding: "utf8" }, (err, file) => {
  // console.log(file);
});
fs.opendir("./", { encoding: "utf8" }, (err, dir) => {
  console.log(dir);
});
// const fsReadFile  = util.promisify(fs.readFile);

const fsReadDir = util.promisify(fs.opendir);
// promise 风格 返回 promise
// promise 化
fsReadDir("./", { encoding: "utf8" }).then((dir) => console.log(dir));

const fsReadFile = mypromisify(fs.readFile);
// 最后的参数 是一个回调
fsReadFile("./reduce2map.js", { encoding: "utf8" }).then((info) => {
  console.log(info);
});
// 写一个 promisify ？？
function mypromisify(func) {
  // 返回？
  return (...args) => {
    return new Promise((resolve, reject) => {
      // 文件读取完？
      func(...args, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  };
}
// 1：接受一个函数（具有常见的错误优先的回调风格的函数）
// 2：promisify(fs.opendir) 返回一个函数
// 3: 读文件 目录 参数哪里来的？？
function promisify2(func) {
  return (...args) => {
    // fsReadDir 调用 读目录 读文件
    // 处理完时候 能用 .then 接受我们的结果吗？？
    // 只能 promise
    return new Promise((resolve, reject) => {
      // 啥时候 resolve 结果？？
      func(...args, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  };
}
