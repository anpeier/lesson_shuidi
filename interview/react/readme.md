- hooks 原理
  1. useState 实现原理
    返回形如 (变量, 函数) 的一个元组,state 的初始值就是外部调用 useState 的时候，传入的参数
    为什么不能在循环、判断内部使用 Hook：
      1. Array 对象
      2. 会为useState调用分配一个空间，通过useState调用顺序辨别各个空间。使用条件语句会导致变量名以及方法名不一致，槽不对应
  2. useEffect
    用于处理大多数副作用，其中的回调函数会在render执行之后在调用,不会阻止浏览器的渲染
    useEffect 第二个参数能根据需要，避免多余的 render。
    可以返回一个用于销毁副作用的函数，相当于 Class 组件的 unmount
  3. useLayoutEffect
    useLayoutEffect中的副作用会在DOM更新之后同步执行。
- react 优化
  使用纯组件 React 提供了 PureComponent 基类
  使用 React.memo 进行组件记忆