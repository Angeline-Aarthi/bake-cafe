const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },

  target: "web",
  devServer: {
    port: "3000",
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(bin|csv|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          }
        ],
        include: /(models)/,
      },
      {
        test: /\.(mp4|png|svg|jpg|csv|gif|woff|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};