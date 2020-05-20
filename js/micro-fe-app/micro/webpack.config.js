const WebpackSystemRegister = require("webpack-system-register");
const path = require("path");
module.exports = {
  entry: {
    Pay: path.join(__dirname, "./Pay.jsx"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [new WebpackSystemRegister({})],
};
