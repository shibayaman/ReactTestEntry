const path = require("path");

module.exports = env => ({
  mode: env.NODE_ENV || "production",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "public/js"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  }
});