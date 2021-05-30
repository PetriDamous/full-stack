const path = require("path");
module.export = {
  entry: {
    app: "./src/index.js",
  },
  devServer: {
    hot: true,
    compress: true,
  },
  watch: true,
  devtool: "source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};
