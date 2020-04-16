# webpack 打包一起资源，loader

webpack loader 手写

## webpack 为web应用工作
- 入口核心文件 .js文件 放在底部加载
  dev-server在内存工作
1. css-loader style-loader的区别？
    js 引入css
    webpack 建立依赖关系的过程
    import require path extension
    ext => loader 对应
    package.json 分析，报错
    
2. use 定制性 webpack 不是用来学的，是用来用的
    webpack的考点多半出自你是否会修
    loader
    js处理css
    web应用而来
    css-loader 为css 后缀解析 以及css内的@import 外部资源
    style-loader 样式插入到DOM中
3. pic 有web应用的需要
    base64何时启动 减少了请求的数量
    js 体积暴增 上限