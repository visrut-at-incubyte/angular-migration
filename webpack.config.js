const path = require("path");

module.exports = {
  entry: "./app/js/main.ts",
  output: {
    filename: "bundle.js", // Just specify the filename without the path
    path: path.resolve(__dirname, "app/dist"),
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".js"],
  },
  module: {
    rules: [{ test: /\.ts?$/, use: "ts-loader" }],
  },
};
