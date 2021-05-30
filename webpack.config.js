const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          enforce: true,
        },
      },
    },
  },
  devServer: {
    hot: true,
    compress: true,
    contentBase: path.join(__dirname, "./public"),
    port: 3000,
    open: "Chrome",
  },
  watch: true,
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "[name].bundle.js",
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
      chunkFilename: "[name].css",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          "sass-loader",
        ],
      },
    ],
  },
};
