import React, { useState, createContext, useContext } from "react";

// 创建上下文
const CountContext = createContext();

function Counter() {
  let count = useContext(CountContext); // 通过useContext拿到CountContext上下文
  return <h2>{count}</h2>;
}

function Example4() {
  // useState 第一个参数是state 第二个参数是改变该state的function
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>你点击了{count}次</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
      {/* 提供上下文给包裹的组件 */}
      <CountContext.Provider value={count}>
        <Counter></Counter>
      </CountContext.Provider>
    </div>
  );
}

export default Example4;
