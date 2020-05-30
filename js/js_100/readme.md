Vue 的响应式原理中 Object.defineProperty 有什么缺陷
- Proxy 代理整个对象 defineProperty每个属性单独代理
- 在Vue2.0中，defineProperty并没有对数组提供完全的数据劫持
  有一个性能问题，n empty object 数组
  部分支持 push() pop() shift() unshift() splice() sort()reverse()等常用方法

1. Object.defineProperty 无法监控数组下标的变化(Vue 对，但是支持一些常用方法)
2. 只能劫持对象的属性，Proxy可以代理整个对象，并返回一个新的对象
3. Proxy不仅可以代理对象，还可以代理数组

- Vue2.x 数组没有支持下标变化，push pop ？ 