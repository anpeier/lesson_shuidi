const fs = require('fs');
// 大文件 
fs.readFile('./README.md', (err, info) => {
  fs.writeFile('./README-copy.md', info, (err, info) => {
    if (!err) {
      console.log('copy success')
    }
  })
})
const readStream = fs.createReadStream('./README.md');
const writeStream = fs.createWriteStream('./README-copy.md');
readStream.pipe(writeStream);
// node  内存管理
// 服务端 