为了协调 event、用户交互、脚本、render、网络等等

## 分类

- 打开一个页面，window event loop
- worker event loop
- worklet event loop

事件循环有一个或多个 task queue
task 的产生可能来自于下面：

- Events
- Parsing
  每个事件循环都有一个当前正在运行的 task

每个事件循环都有一个 microtask queue
每个事件循环都有 microtask checkpoint 布尔值(最初为 false)

## process

事件循环只要存在，就必须不断地执行以下步骤:

- 从 taskQueue 取出第一个可运行任务，执行
- 遇到：Microtasks
  - 如果 microtask checkpoint 为 true，则返回。
  - Set microtask checkpoint true
  - 只要微任务队列不为空：
    - 运行 Microtask
  - Set checkpoint to false
- Update the rendering：渲染

- 每次从 taskQueue 取出第一个可运行任务，执行，
- 如果有 microtask queue，那么只要微任务队列不为空，一直运行 Microtask，
- 如果需要那么会发生 render

- 一个 task
- 所有 Microtask
- render

## 任务的分类

主要有两个类型，不同类型的任务放去 不同的队列去。
这部分主要分散在各个标准里面：

microtask 类型:

- process.nextTick
- MutationObserver 回调
- Promise.then 回调

task 类型:

- 主代码块
- setTimeout
- setInterval
- setImmediate

<!-- task === MacroTask -->

一开始整个脚本作为一个宏任务执行
执行过程中同步代码直接执行，宏任务进入宏任务队列，微任务进入微任务队列
当前宏任务执行完出队，检查微任务列表，有则依次执行，直到全部执行完
执行浏览器 UI 线程的渲染工作
检查是否有 Web Worker 任务，有则执行
执行完本轮的宏任务，回到 2，依此循环，直到宏任务和微任务队列都为空

微任务包括：MutationObserver、Promise.then()或 catch()、Promise 为基础开发的其它技术，比如 fetch API、V8 的垃圾回收过程、Node 独有的 process.nextTick。
宏任务包括：script 、setTimeout、setInterval 、setImmediate 、I/O 、UI rendering。
注意 ⚠️：在所有任务开始的时候，由于宏任务中包括了 script，所以浏览器会先执行一个宏任务，在这个过程中你看到的延迟任务(例如 setTimeout)将被放到下一轮宏任务中来执行。
