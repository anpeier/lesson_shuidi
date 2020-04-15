// let a:number = 1; // 类型系统 java 等大型语言的优势， 
// // 90%以上的bug 可以因为把代码从js -> ts  
// console.log('惊雷我', a); // ts 写成js 就可以
import * as React from 'react'; // mvvm 模板编译
import * as ReactDOM from 'react-dom'; // dom 挂载

// tsx 文件， react 独有的 JSX 语法表达文件 
// index ->  index.tsx  入口文件里就使用 jsx语法

// import { HelloComponent } from './hello'; //
import { AppRouter } from './router';

// console.log(HelloComponent);
ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
)