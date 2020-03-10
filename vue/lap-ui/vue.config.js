module.exports = {
  pages: {
    index: {
      entry: "example/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  // 让 packages加入编译
  chainWebpack: config => {
    config.module
      .rule("js")
      .include
        .add("/packages")
        .end()
      .use("babel")
        .loader("babel-loader");
  }
};
