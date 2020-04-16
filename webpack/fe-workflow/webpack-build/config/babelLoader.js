// 在base config  之和插上babel处理
// webpack-chain
module.exports = (config, resolve) => {
  //   babel 的js化
  // webpack 使用module
  // 基本原则
  const baseRule = config.module.rule("js").test(/.js|.ts$/);
  const babelPath = resolve("babel.js");
  const babelConf = require(babelPath);
  console.log(babelConf, "sssssssss");
  const version = require(resolve("node_modules/@babel/core/package.json"))
    .version;

  return () => {
    baseRule
      .use("babel")
      // 将 js文件 用babel编译
      .loader(require.resolve("babel-loader"))
      .options(
        babelConf({
          version,
        })
      );
  };
};
