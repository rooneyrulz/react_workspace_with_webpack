import path from "path";
import htmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index_bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
