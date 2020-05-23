import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// electron调用NativeAPI 多进程架构
// Inter-Process Communication 进程间通信
// electron 不支持import
// create-react-app 0配置启动
import { ipcRenderer, remote } from "electron"; // 去到ipc
const { Menu, MenuItem } = remote;
function App() {
  const [localCode, setLocalCode] = useState("");
  const [controlText, setControlText] = useState("");
  const login = async () => {
    // invoke 触发方法
    let code = await ipcRenderer.invoke("login");
    setLocalCode(code);
  };
  useEffect(() => {
    login();
  },[]);
  const handleContextMenu = (e) => {
    e.preventDefault();
    const menu = new Menu();
    menu.append(
      new MenuItem({
        label: "复制",
        role: "copy",
      })
    );
    menu.append(
      new MenuItem({
        label: "分享到微信",
        click: (menuItem, win, KeyboardEvent) => {
          ipcRenderer.send("share-to-wechat", "1111");
        },
      })
    );
    menu.popup();
  };
  return (
    <div className="App">
      {controlText === "" ? (
        <>
          <div>你的控制码</div>
          <span>{localCode}</span>
        </>
      ) : (
        <div>{controlText}</div>
      )}
    </div>
  );
}

export default App;
