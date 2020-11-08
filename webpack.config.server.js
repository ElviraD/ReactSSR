const path = require('path');

module.exports = {
  // 编译为类 Node.js 环境可用
  target: "node",
  // webpack 打包入口文件
  entry: path.join(__dirname, "./src/server/serverApp.js"),
  // webpack 打包输出文件配置
  output: {
    filename: "App.js",
    path: path.join(__dirname, "./dist/server"),
    libraryTarget: "commonjs2",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: path.join(__dirname, "./node_modules"),
      },
    ],
  },
};