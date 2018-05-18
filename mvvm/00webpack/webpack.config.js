const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
  entry: {
    app: "./src/app.js",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    host: "127.0.0.1",
    port: "9527"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "San - 00 webpack",
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          "html-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.san$/,
        use: [
          "san-loader"
        ]
      }
    ]
  }
}