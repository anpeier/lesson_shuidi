import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <button id="add">add</button>
    <button id="min">min</button>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


let a = 1 + 2 - 3;
let b = 2 + 3 - 6;
let c = 4 + 2 - 5;
// 共同点：求和 求差 封装（抽象）
// 不同的呢：通过参数传进来
// http://baidu.com?a=1&b=2&c=3  => {a: 1, b: 2, c: 3}
// http://google.com?key=val
function urlParse(url) {
  // 
  return {}
}
function operation(a, b, c) {
  return a + b - c;
}
class Url {
  urlParse() {}
  urlStringfy() {}
}
// 对数据的抽象
// 我们已经把 url 这个数据，抽离出来，和 urlParse 方法 分离
window.onload = function() {
  const add = document.getElementById('add');
  const min = document.getElementById('min');
  let delay = 2000;
  let prev = Date.now();
  add.onclick = throttle(function() {
    // let now = Date.now();
    // if (now - prev > 2000) {
      console.log('发出请求');
      // prev = now;
    // }
  }, 2000)
  // 1：prev
  min.onclick = throttle(function() {
    // 2：now
    // 3：判断一下时间间隔
    // 4：prev = now;
    console.log('send req');
  }, 2000)
  // 两个按钮 都要节流？？怎么封装 ？？ 
  // lodash：throttle(func, wait)
  /**
   * 封装思路
   * 相同的：1 2 3 4，封装在自己内部
   * 不同的：干的事不一样（function）, 传给我一个函数
   * 函数是一等公民：函数和其他变量(number,string)有同等的地位，
   * 他们都可以当做函数的参数传递，也可以当做函数的返回值返回
   */
  // 高阶函数：high order function （HOF）
  function throttle(func, wait) {
    // 1
    let time1 = Date.now();
    // 我怎么知道 啥时候触发，别人都把他要干的事 传给你了，当然有你决定啥时候触发了
    // add.onClick = 函数
    return function() {
      // 里面这层函数，就是 我们返回给 onClick 的，所以 onCLick 执行的也是 里面这层函数
      // 2
      let time2 = Date.now();
      // 3
      if (time2 - time1 > wait) {
        // 时机到了
        func()
        // 4
        time1 = time2;
      }
    }
  }
}