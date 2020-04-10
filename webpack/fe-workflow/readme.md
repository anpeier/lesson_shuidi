## 前端工作流 fe workflow webpack

- webpack 配置
  6 个知识点
  二线面试需求
- webpack 学架构
  1. 源头 package.json
     webpack 架构 dev build
     cross-env 服务器无差别环境变量配置 node npm 都用哪些？
     并行同时考虑工作流架构
     将编译工作(工作流) 通过目录 开发架构的一项
  2. webpack 重要性
     代码需要维护 每天都要运营项目
     改了一点点都有 webpack build
  3. base.js 同时服饰 dev.js build.js
     模块化 把基础配置做好，向外输出
  4. webpack 其他的 module 及插件处理
     config.js
  5. lib 把 module 放在 config 目录下 一个文件一件事
     findSync 所有 js 文件组成数组输出
  6. 可拔插的 webpack 插件
     打包器
  - babel
    js ts
  - css 压缩 stylus -> css
    postcss?
  - htmltemplate
    webpack 通过 module 将编译的事物 可拔插的 load 进相应的模块进行处理
    实现 webpack + 其他模块的生态链 占据了工作流的生态位
    webpack module 配置模块

1. test /.js\$/
2. loader
3. 配置项
   webpack-chain js
   ts 是 js 的超集
   ts 有类型的 js 降低 js 出错率
