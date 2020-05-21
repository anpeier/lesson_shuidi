let { app, BrowserWindow } = require('electron'); // node 端运行
let win
app.on('ready', () => {
  win = new BrowserWindow({
    width: 600,
    height: 300,
    webPreferences: {
      nodeIntegration: true
    }
  })  // chromium 就启动了 桌面的代表就是窗口
  win.loadURL('http://localhost:3000')
})