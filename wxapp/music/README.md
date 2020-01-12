- 组件引入外部样式方式
  1. 将外部样式写在组件内部
  2. externalClasses
     不能对外部样式进行修改
  3. styleIsolation: 'apply-shared'
     可以直接对外部样式进行修改
- 组件通信
  triggerEvent
    自定义组件触发事件