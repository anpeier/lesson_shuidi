// 所有webpack配置在config目录
// 函数
module.exports = (config, resolve) => {
  // 运行函数 闭包
  return () => {
    config
      .entry("app")
      .add(resolve("src/main.js"))
      .end()
      .set("mode", process.env.NODE_ENV)
      .output.path(resolve("dist"))
      .filename("[name].bundle.js");
  };
};
