const WebSocket = require("ws");
const events = require("events");
const code2ws = new Map(); // Map 维护了连接关系

const wss = new WebSocket.Server({
  port: 8010,
});

// console.log(wss instanceof events)
wss.on("connection", function connection(ws, request) {
  // ws 每一个 用户
  // console.log(ws);
  let code = Math.floor(Math.random() * (999999 - 11111)) + 1000000;
  code2ws.set(code, ws);
  // console.log(code2ws)
  ws.on("message", function incoming(message) {
    // 字符串 二进制流
    // console.log("incoming", message);
    ws.sendData = (event, data) => {
      ws.send(JSON.stringify({ event, data }));
    };
    let parseMessage = {};
    // 下面代码有什么风险
    // node 的出错 单线程 crash pm2
    try {
      parseMessage = JSON.parse(message);
    } catch (error) {
      ws.send("message invalid");
      console.log("parse message error");
    }
    let { event, data } = parseMessage;
    console.log(data);
    if (event === "login") {
      ws.sendData("logined", code);
    } else if (event === "control") {
      let remote = data.remote;
      console.log(remote);
      if (code2ws.has(remote)) {
        ws.sendData("controlled", { remote });
        ws.sendRemote = code2ws.get(remote).sendData;
        console.log(ws.sendRemote);
        ws.sendRemote("be-controlled", {
          remote: code,
        });
      }
    }
  });
});
