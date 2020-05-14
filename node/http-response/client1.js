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
client.on("data", (data) => {
  parse.receive(data.toString());
});
client.on("end", (data) => {
  console.log("disconnect");
  console.log(parse.statusLine);
  console.log(parse.headers);
  console.log(parse.body);
});
// const write = fs.createWriteStream('./res.txt');
// client.pipe(write);

class ResponseParse {
  constructor() {
    this.WAIT_STATUS_LINE = 0;
    this.WAIT_STATUS_LINE_END = 1;
    this.WAIT_HEADER_NAME = 2;
    this.WAIT_HEADER_SPACE = 3;
    this.WAIT_HEADER_VALUE = 4;
    this.WAIT_HEADER_LINE_END = 5;
    this.WAIT_HEADER_BLOCK_END = 6;
    this.currentState = this.WAIT_STATUS_LINE;

    this.statusLine = "";
    this.headerName = "";
    this.headerValue = "";
    this.body = "";
    this.headers = {};
  }

  receive(str) {
    for (let i = 0; i < str.length; i++) {
      this.receiveChar(str[i]);
    }
  }
  receiveChar(char) {
    if (this.currentState === this.WAIT_STATUS_LINE) {
      // 默认 第一个状态 字符 一定属于状态行
      if (char === "\r") {
        this.currentState = this.WAIT_STATUS_LINE_END;
      } else {
        this.statusLine += char;
      }
    } else if (this.currentState === this.WAIT_STATUS_LINE_END) {
      if (char === "\n") {
        this.currentState = this.WAIT_HEADER_NAME;
      }
    } else if (this.currentState === this.WAIT_HEADER_NAME) {
      if (char === ":") {
        this.currentState = this.WAIT_HEADER_SPACE;
      } else if (char === "\r") {
        this.currentState = this.WAIT_HEADER_BLOCK_END;
      } else {
        this.headerName += char;
      }
    } else if (this.currentState === this.WAIT_HEADER_SPACE) {
      if (char === " ") {
        this.currentState = this.WAIT_HEADER_VALUE;
      }
    } else if (this.currentState === this.WAIT_HEADER_VALUE) {
      if (char === "\r") {
        this.headers[this.headerName] = this.headerValue;
        this.headerName = "";
        this.headerValue = "";
        this.currentState = this.WAIT_HEADER_LINE_END;
      } else {
        this.headerValue += char;
      }
    } else if (this.currentState === this.WAIT_HEADER_LINE_END) {
      if (char === "\n") {
        this.currentState = this.WAIT_HEADER_NAME;
      }
    } else if (this.currentState === this.WAIT_HEADER_BLOCK_END) {
      this.body += char;
    }
  }
}

let parse = new ResponseParse();
