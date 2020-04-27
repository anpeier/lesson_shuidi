- loader
    loader 用于对模块的源代码进行转换
    loader 从右往左解析
    常用loader：css-loader style-loader url-loader(把图片解析成base64) file-loader(解析项目中的url引入) postcss-loader babel-loader
- plugin
    Plugin 是用来扩展 Webpack 功能的，通过在构建流程里注入钩子实现，它给 Webpack 带来了很大的灵活性。 通过plugin（插件）webpack可以实 loader 所不能完成的复杂功能，使用 plugin 丰富的自定义 API 以及生命周期事件，可以控制 webpack 打包流程的每个环节，实现对 webpack 的自定义功能扩展。
    常用plugin：
      mini-css-extract-plugin 抽离css插件
      optimize-css-assets-webpack-plugin 压缩css
      copy-webpack-plugin 拷贝文件插件
      html-webpack-plugin
- 优化
    1. 缓存
      babel-loader 中，可以通过设置 cacheDirectory 来开启缓存，将每次的编译结果写进硬盘文件
    2. 多核编译
      happypack 并行编译
    3. 抽离代码
      使用 webpack-dll-plugin 的方式，在首次构建时候就将这些静态依赖单独打包，后续只需要引用这个静态依赖包
      配置多个入口，将长时间不变动的资源进行单独打包
    4. cdn引用