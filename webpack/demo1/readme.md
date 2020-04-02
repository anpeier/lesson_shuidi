- es6 node babel loader
- 前端生产工艺 CI CD
- src 开发目录
    入口文件 main.js
    webpack bundle
- js 与其他类型文件可以相容
    1. 文本
    2. {}

- webpack 如何让js文件理解css
    webpack devDependencies
    静态资源 css js style png gif
    1. cross-env NODE_ENV=development
        可以屏蔽Windows Linux mac 的环境变量差异
    2. 最小执行单元
        entry output
        webpack webpack.config.js 配置
    3. rimraf 删除目录
    4. loader 
        webpack 工厂流水线
        不能处理的文件 .css .styl .vue
        loader 能理解的地方去处理
        .vue js component