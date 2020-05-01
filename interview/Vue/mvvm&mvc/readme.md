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
  代理深层属性时：
    判断当前Reflect.get的返回值是否为Object，如果是则再通过reactive方法做代理， 这样就实现了深度观测。
  如何防止多次get/set：
    判断key是否为当前被代理对象target自身属性，也可以判断旧值与新值是否相等，只有满足以上两个条件之一时，才有可能执行trigger。
- MVC
  允许在不改变视图的情况下改变视图对用户输入的响应方式，用户对View的操作交给了Controller处理，在Controller中响应View的事件调用Model的接口对数据进行操作，一旦Model发生变化便通知相关视图进行更新
- MVVM
  1. MVVM是一种设计思想。Model 层代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑；View 代表UI 组件，它负责将数据模型转化成UI 展现出来，ViewModel 是一个同步View 和 Model的对象。
  在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的， 因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上。
  ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。
  2. 实现了View和Model的自动同步，也就是当Model的属性改变时，我们不用再自己手动操作Dom元素，来改变View的显示，而是改变属性后该属性对应View层显示会自动改变
- diff算法
    1. 不是相同节点：
      isSameNode为false的话，直接销毁旧的 vnode，渲染新的 vnode。
    2. 是相同节点，要尽可能的做节点的复用
      如果新 vnode 是文字 vnode
      就直接调用浏览器的 dom api 把节点的直接替换掉文字内容就好。
      如果新 vnode 不是文字 vnode
      那么就要开始对子节点 children 进行对比了。
      如果有新 children 而没有旧 children
      说明是新增 children，直接 addVnodes 添加新子节点。
      如果有旧 children 而没有新 children
      说明是删除 children，直接 removeVnodes 删除旧子节点
      如果新旧 children 都存在，diff children
        过程
          旧首节点和新首节点用 sameNode 对比。
          旧尾节点和新尾节点用 sameNode 对比
          旧首节点和新尾节点用 sameNode 对比
          旧尾节点和新首节点用 sameNode 对比
  Vue3.x借鉴了 ivi算法和 inferno算法
  在创建VNode时就确定其类型，以及在mount/patch的过程中采用位运算来判断一个VNode的类型，在这个基础之上再配合核心的Diff算法，使得性能上较Vue2.x有了提升
- Computed和Watch
  Computed本质是一个具备缓存的watcher，依赖的属性发生变化就会更新视图。 适用于计算比较消耗性能的计算场景。
  Watch没有缓存性，更多的是观察的作用，可以监听某些数据执行回调。当我们需要深度监听对象中的属性时，可以打开deep：true选项。
- data为什么是一个函数
  一个组件被复用多次的话，也就会创建多个实例。本质上，这些实例用的都是同一个构造函数。如果data是对象的话，对象属于引用类型，会影响到所有的实例。所以为了保证组件不同的实例之间data不冲突，data必须是一个函数
- v-model的原理
  value + input方法的语法糖
  不同的输入元素使用不同的 property 并抛出不同的事件
  input 和 textarea 元素使用 value property 和 input 事件；
  checkbox 和 radio 使用 checked property 和 change 事件；
  select 字段将 value 作为 prop 并将 change 作为事件。
- Virtual DOM 的优势
    - DOM 引擎、JS 引擎 相互独立，但又工作在同一线程（主线程）
        JS 代码调用 DOM API 必须 挂起 JS 引擎、转换传入参数数据、激活 DOM 引擎，DOM 重绘后再转换可能有的返回值，最后激活 JS 引擎并继续执行若有频繁的 DOM API 调用，且浏览器厂商不做“批量处理”优化，
        引擎间切换的单位代价将迅速积累若其中有强制重绘的 DOM API 调用，重新计算布局、重新绘制图像会引起更大的性能消耗。
    - VDOM 和真实 DOM 的区别和优化：
        虚拟 DOM 不会立马进行排版与重绘操作
        虚拟 DOM 进行频繁修改，然后一次性比较并修改真实 DOM 中需要改的部分，最后在真实 DOM 中进行排版与重绘，减少过多DOM节点排版与重绘损耗
        虚拟 DOM 有效降低大面积真实 DOM 的重绘与排版，因为最终与真实 DOM 比较差异，可以只渲染局部
- key
  key的作用是尽可能的复用 DOM 元素
  key也就是children中节点的唯一标识。
  map的时间复杂度时O(1)