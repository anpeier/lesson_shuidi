- 组件式开发
  页面由组件构成(拼乐高)，而非标签(传统切页面)
  Facebook 由一万多个组件拼起来，组件的复用
  components/header/header 效力于多个页面
- Object.assign({}, obj, obj, ...)
  来自es6，用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
- import from 模块化开发
- 组件化思维
  一方面是一个页面由好多组件构成，页面开发可以划分任务
  催生的是大量的团队合作
  每个组件要解耦
  scoped #app[data-v-12121]
- Vue 禁止DOM 操作
  ref=""关联一个元素 this.$refs. 找到它