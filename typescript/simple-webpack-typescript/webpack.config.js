const path = require("path");
module.exports = {
  mode: "production" || "development",
  entry: {
    index: "./src/app.ts",
  },
  output: {
    publicPath: __dirname + "dist",
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
