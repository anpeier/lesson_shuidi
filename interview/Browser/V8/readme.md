- JS 内存

- js是单线程，这个单线程包括 setTimeout promise addEventListen 这些？
  是什么的单线程？
  渲染进程 input dom input（file） -> 通过与浏览器主进程通信，主进程读取磁盘图片数据返回给渲染进程，（URL FileReader） 渲染进程的js 发起 ajax 请求，是通过浏览器主进程去调用网络进程发起请求，还是渲染进程可以直接调用网络进程发送请求？

  ajax 请求 XMLHttpRequest 单线程
  独立于 js 引擎之外的 XMLHttpRequest http进程
    js ie6 是以什么身份登场？ ActiveXObject

  chrome 打开进程 为什么每个tab新开一个进程
    更快，dom,css,layout,js执行 页面越来越复杂的时候 2008 RIA 3-2
    更安全 沙箱机制

  渲染进程 JS 单线程的宿主

  1. JS 单线程是指V8引擎的单线程 词法 语法 上下文环境 AST
    tab启动 新的进程 主线程mainThread

  1. GUI渲染进程
    负责渲染浏览器界面，html，css，构建DOM树，Render树，布局与绘制
    底部的js会执行
    多线程会让 简单的web编程变得复杂
  2. 事件触发线程
    事件循环队列
    不属于我们的渲染进程，属于浏览器
  3. http请求线程
  4. 定时器线程

  js 单线程 = js 引擎线程

  闭包 引用式赋值 动态 作用域 隐式类型转换 - JS 内存概念

1. 小黄书 + 讶羽 -> 浏览器底层的 联系起来所有的考点

理解 JS 内存机制 可以解决面试中大部分问题
1. JS 语言需要手动打理内存？不需要
2. 词法分析
  引用式赋值 词法 token
  简单数据（变量 常量） -> 栈空间
  复杂数据 -> 堆空间
  1. 堆？ 快排 堆排序
  2. 为什么在有栈空间之和还要有堆空间？

代码跟HTML一样，不好理解，数据结构，算法
1. 执行栈构建
2. 执行