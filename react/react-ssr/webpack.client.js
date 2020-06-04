const path = require("path");
const merge = require("webpack-merge");
const config = require("./webpack.base.js");

const clientConfig = {
  mode: "development",
  entry: "./src/client/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "static"),
  },
};

module.exports = merge(config, clientConfig);
