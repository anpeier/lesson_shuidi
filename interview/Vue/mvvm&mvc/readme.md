- 双向绑定
    数据双向绑定 是一种模式，web语境下一般指数据从dom到JS对象之间的自动同步
  1. 如何检测 JS 对象属性发生的变更
    Vue 则采用元编程接口 Object.defineProperty 实现的。 在组件初始化，会调用该接口，将对象属性包装为get、set函数，将代码“埋入”属性是“获取”、“修改”行为中。
  2. 使用 Dep 解耦了依赖者与被依赖者之间关系的确定过程
    1. 通过 Observer 提供的接口，遍历状态对象，给对象的每个属性、子属性都绑定了一个专用的 Dep 对象。这里的状态对象主要指组件当中的data属性。
    2. 创建Watcher类
      调用 initComputed 将 computed 属性转化为 watcher 实例
      调用 initWatch 方法，将 watch 配置转化为 watcher 实例
      调用 mountComponent 方法，为 render 函数绑定 watcher 实例
    3. 状态变更后，触发 dep.notify() 函数，该函数再进一步触发 Watcher 对象 update 函数，执行watcher的重新计算。
    render 函数，我们可以将其视为一种特殊的 computed 函数，在它所对应的 Watcher 对象发生变化时，触发执行render，生成新的 virutal-dom 结构，再交由 Vue 做diff，更新视图。
- 问题：
  递归遍历所有的对象的属性，如果数据层级比较深的话，很耗费性能
  只能应用在对象上，不能用于数组
  只能够监听定义时的属性，不能监听新加的属性，这也就是为什么在vue中要使用Vue.set的原因，删除也是同理
- Vue3.0
  使用proxy实现对象的监听
  Proxy对象可以方便地调用对应的Reflect方法，完成默认行为，作为修改行为的基础.

- MVC
  允许在不改变视图的情况下改变视图对用户输入的响应方式，用户对View的操作交给了Controller处理，在Controller中响应View的事件调用Model的接口对数据进行操作，一旦Model发生变化便通知相关视图进行更新
- MVVM
  1. MVVM是一种设计思想。Model 层代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑；View 代表UI 组件，它负责将数据模型转化成UI 展现出来，ViewModel 是一个同步View 和 Model的对象。
  在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的， 因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上。
  ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。
  2. 实现了View和Model的自动同步，也就是当Model的属性改变时，我们不用再自己手动操作Dom元素，来改变View的显示，而是改变属性后该属性对应View层显示会自动改变