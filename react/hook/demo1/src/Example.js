import React, { useState, useEffect } from "react";
import { BrowserRouter as Router,Route, Link } from 'react-router-dom'

function Index() {
  useEffect(() => {
    console.log('useEffect => 来了老弟')
    return () => {
      console.log('溜了溜了')
    }
  },[])
  return (
    <h2>首页</h2>
  )
}

function List() {
  useEffect(() => {
    console.log('useEffect => 来了老弟List')
    return () => {
      console.log('溜了溜了List')
    }
  },[])
  return (
    <h2>列表</h2>
  )
}

function Example() {
  // useState 第一个参数是state 第二个参数是改变该state的function
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Didupdate => 你点击了${count}次`);
    return () => {
      console.log('--------------')
    }
  },[count]); // 第二个参数变化时执行
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

      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list">列表</Link></li>
        </ul>
        <Route path="/" exact component={Index}></Route>
        <Route path="/list" exact component={List}></Route>
      </Router>
    </div>
  );
}

export default Example;
