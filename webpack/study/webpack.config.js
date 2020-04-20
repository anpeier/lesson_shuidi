//webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin"); // 拷贝文件插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 抽离css插件
const OptimizeCssPlugin = require("optimize-css-assets-webpack-plugin"); // 压缩css
const rimraf = require("rimraf");
const path = require("path");
const isDev = process.env.NODE_ENV === "development";
const config = require("./public/config")[isDev ? "dev" : "build"];
rimraf.sync(path.join(process.cwd(), "dist"));
module.exports = {
  mode: isDev ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              [
                "@babel/plugin-transform-runtime",
                {
                  corejs: 3,
                },
              ],
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240, //10K
              esModule: false,
              name: "[name].[hash:6].[ext]",
              outputPath: "assets",
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          // "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: true,
            },
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: function () {
                return [require("autoprefixer")()];
              },
            },
          },
          "less-loader",
        ],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    port: "3000", //默认是8080
    quiet: false, //默认不启用
    inline: true, //默认开启 inline 模式，如果设置为false,开启 iframe 模式
    stats: "errors-only", //终端仅打印 error
    overlay: false, //默认不启用
    clientLogLevel: "silent", //日志等级
    compress: true, //是否启用 gzip 压缩
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html", //打包后的文件名
      config: config.template,
    }),
    new CopyWebpackPlugin(
      [
        {
          from: "public/css/*.css",
          to: path.resolve(__dirname, "dist", "css"),
          flatten: true, // 只拷贝文件 false会拷贝文件夹路径
        },
      ],
      //还可以继续配置其它要拷贝的文件
      {
        ignore: ["other.css"], // 忽略拷贝的文件
      }
    ),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:8].css",
      //个人习惯将css文件放在单独目录下
      //publicPath:'../'   //如果你的output的publicPath配置的是 './' 这种相对路径，那么如果将css文件放在单独目录下，记得在这里指定一下publicPath
    }),
    new OptimizeCssPlugin(),
  ],
};
