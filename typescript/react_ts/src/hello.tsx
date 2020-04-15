import * as React from "react"; // ts 牛逼 静态编译
// 无状态组件 statelesscomponent
export const hello = () => {
  // 返回html的函数就是最简单的组件
  return (
    // jsx js in xml 声明式的模板引擎语法，react vue 区别  <template/>
    <div>
      <h2>Hello lap</h2>
      <a href="#/">首页</a>
    </div>
  );
};
