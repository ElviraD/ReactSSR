/*
 * @Description: 
 * @Autor: dengwenyuan001
 * @Date: 2020-11-08 15:02:03
 * @LastEditors: dengwenyuan001
 * @LastEditTime: 2020-11-08 17:44:06
 */
const path = require('path');
// HTML插件 配置启动页面
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  // webpack 打包入口文件
  entry: path.join(__dirname, "./src/client/index.js"),
  // webpack 打包输出文件配置
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "./dist/client"),
    publicPath: '/p/'
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
  // 插件配置
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, "./src/client/index.html"),
      filename: "index.html", // 自动生成html文件的名称
    }),
  ],
  // dev 热更新
  devServer: {
    hot: true,
    port: "3000",
    overlay: true,
  },
};