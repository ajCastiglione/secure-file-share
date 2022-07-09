const path = require("path");

module.exports = {
  mode: "development",
  entry: "./assets/css/style.css",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.css",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "assets"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
};
