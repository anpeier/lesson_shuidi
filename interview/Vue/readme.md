1. computed 有缓存 data不变不会重新计算

2. watch 

   1. 如何深度监听

   ```javascript
   // 监听的对象
   info: {
     handler(oldVal,val){
     	
     }
     deep: true
   }
   ```

   主要是通过traverse方法，数组的变动不需要deep

   2. watch 监听引用类型，拿不到oldVal，原因是watch监听对象属性是它的地址，而不是值
   3. immediate属性能够让被监听属性一开始就执行回调函数
   4. 使用$watch 书写时，需要手动注销：$unWatch方法

3. v-show和v-if区别

   1. v-show通过dispaly：none属性控制，在切换频繁时性能更好一些，更高的初始渲染性能，对于前台页面的数据展示，推荐使用v-show
   2. v-if涉及dom的创建和销毁，它是惰性的，在条件第一次变为真时，才会开始渲染条件块，频繁渲染性能消耗更高，对于管理系统的权限列表的展示，尽量使用v-if来渲染

4. v-for不能和v-if同时使用

   1. v-for的计算优先级更高，会在循环完之后进行v-if判断。

5. event
   1. event是原生event对象
   2. 事件被挂载在当前元素

6. 父子组件通信

   1. eventBus：$emit $on $off $once

   2. 带有父子组件生命周期

      创建：父组件创建 -> 子组件创建 -> 子组件挂载 -> 父组件挂载

      更新： 父组件beforeUpdate -> 子组件beforeUpdate -> 子组件update -> 父组件update

# vue高级特性

   1. v-model

      - 修饰符

        .lazy .number .trim

      - 语法糖

        v-model是v-bind和v-on的简写，必须接收一个value属性，有新的value时触发input事件

   2. 自定义组件的v-model

      使用model选项

      ```javascript
      model: {
          prop: 'checked', // 绑定的属性
          event: 'change'  // 触发更新的事件
        },
        props: {
          checked: Boolean
        }
      ```

      

   3. $nextTick

      1. 异步渲染，$nextTick 待DOM渲染完再回调
      2. 页面渲染时，将data的修改做整合，多次data修改只会渲染一次

   4. slot

      实现内容分发

      带有name属性的叫做具名插槽，通过该属性可以将内容传递到指定插槽

   5. 动态，异步组件

      动态组件：通过 :is 属性，属性值可以是已注册组件的名字，或一个组件的选项对象

      异步加载组件：

      1. 推荐做法：[webpack 的 code-splitting 功能](https://webpack.js.org/guides/code-splitting/)一起配合使用

         ```javascript
         Vue.component('async-webpack-example', function (resolve) {
           // 使用webpack进行代码分割，然后通过ajax请求加载
           require(['./my-async-component'], resolve)
         })
         ```

      2. 局部注册：

         直接提供一个返回 `Promise` 的函数：

         ```javascript
          'my-component': () => import('./my-async-component')
         ```

         

   6. keep-live

      缓存不活动的组件

      属性：

        - `include` - 字符串或正则表达式。只有名称匹配的组件会被缓存。
        - `exclude` - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。
        - `max` - 数字。最多可以缓存多少组件实例。

      钩子函数：

      - activated：被缓存的组件激活时调用
      - deactivated：被缓存的组件停用时调用

      不能在函数式组件使用

   7. mixin

      把组件中的公共部分抽取出来进行复用

      问题：

      1. 变量来源不明，代码不容易阅读
      2. 多mixin可能造成命名冲突
      3. 多mixin可能出现多对多关系，复杂度高，不利于代码维护