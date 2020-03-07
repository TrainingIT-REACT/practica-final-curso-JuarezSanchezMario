const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
    sw: "./src/sw.js"
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[chunkhash:8].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      { test: /\.html$/i, loader: "html-loader" },
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    contentBase: "./build",
    historyApiFallback: true,
    proxy: {
      "/songs": {
        target: "http://localhost:3001/",
        pathRewrite: { "^/songs/": "/songs/" },
        xfwd: true
      },
      "/albums": {
        target: "http://localhost:3001/",
        pathRewrite: { "^/albums/": "/albums/" },
        xfwd: true
      }
    }
  }
};
