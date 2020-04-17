import * as React from "react";
import { Header } from "./components/index";
// react函数式组件
// 类型限制 函数 类 组件
// @types/react
export const App: React.StatelessComponent<{}> = () => {
  return (
    <div className="container-fluid">
      {/* 导航组件封装 */}
      <Header />
    </div>
  );
};
