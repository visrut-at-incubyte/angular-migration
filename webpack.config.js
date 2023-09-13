const path = require("path");
const webpack = require("webpack");

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
  plugins: [
    new webpack.ContextReplacementPlugin(
      // if you have anymore problems tweet me at @gdi2290
      // The (\\|\/) piece accounts for path separators for Windows and MacOS
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, "app"), // location of your src
      {} // a map of your routes
    ),
  ],
};
