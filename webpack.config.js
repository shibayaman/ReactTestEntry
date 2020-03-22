const path = require("path");

module.exports = env => ({
  mode: env.NODE_ENV || "production",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "public/js"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.+(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  }
});