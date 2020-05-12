// const http = require('http')
// http.request({
//   headers: {},
//   url: {}
// })
const net = require("net");
const fs = require("fs");
const client = net.createConnection(
  {
    port: 8088,
  },
  () => {
    // 请求报文
    client.write("POST / HTTP/1.1\r\n");
    client.write("HOST: 127.0.0.1\r\n");
    client.write("Content-Length: 7\r\n");
    client.write("Content-Type: application/x-www-form-urlencoded\r\n");
    client.write("\r\n");
    client.write("abc=456");
  }
);
// 响应报文
// client.on("data", (data) => {
//   console.log(data.toString());
// });
// client.on("end", (data) => {
//   console.log("disconnect");
// });
const write = fs.createWriteStream('./res.txt');
client.pipe(write);
