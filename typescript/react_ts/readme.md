# react ts 
react + ts 是必问

webpack-dev-server webpack 编译 同时， 启动live-serer http服务     start  dev 
webpack 编译  nginx docker  阿里云 build  node 

1. --inline  --hot 
  热更新， 让我们的页面左到局部更新 不用丢失组件状态 MVVM 
  vue mounted data  
2. hash 是什么
  文件版本， app.fdsfdafaf1212.js demo.
  fdsfdafaf1212.[hash].css
  静态文件会缓存， app.[hash].js?3 old new 
3. babelrc presets env modules 干嘛？
4. entry 多入口作用是？
  entry 从某个文件 require  import webpack  __require__ 
  单点入口， 组织起来一个依赖关系  业务常改变， hash 需要， 通知
  客户端更新
  把几个月， 永远不更新的文件 作为独立的入口， 
  entry 可以有多个打包的入口吗？ 为什么
  vendor 库  vue.js  vuex vue-router 
  提升了编译速度， 同时保障及改善了用户的浏览体验  缓存
5. tsx 再工作流是如何完成编译支持的
  resolve.extendsions tsx -> module, test .tsx?-> awesome-typescript-loader -> tsconfig.json jsx-> react -> 
  babel 
  jSX 良好表现的template 语法
- dist 目录不删除再生成？ 历史版本都留下， 利于回滚代码