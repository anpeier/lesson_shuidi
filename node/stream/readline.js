const readline = require('readline');
// console.log('? Generate project in current directory? ')
const fs = require('fs');
const rl = readline.createInterface({
  // input: process.stdin,
  // out: process.stdout
  input: fs.createReadStream('./README.md')
})
rl.on('line', function(lineData) {
  console.log(lineData);
})
// 日志处理
// 逐行读取日志？优雅


// 不使用流：先把一个大文件，一次性读完，按行切割