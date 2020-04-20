// import "./app.css"
// console.log('welcome')
import * as React from "react";
import * as ReactDom from "react-dom";
import { App } from "./app";

ReactDom.render(
  // react hooks 超越 redux vuex 的新特性 跨组件共享状态
  <App/>,
  document.getElementById("root")
);
