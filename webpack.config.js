const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/server.ts",
  target: "node", // Module not found: Error: Can't resolve 'fs' 対策
  externals: [nodeExternals()],
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        enforce: "pre",
        loader: "tslint-loader",
        test: /\.ts$/,
        exclude: [/node_modules/],
        options: {
          emitErrors: true,
        },
      },
      {
        loader: "ts-loader",
        test: /\.ts$/,
        exclude: [/node_modules/],
        options: {
          configFile: "tsconfig.json",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
  },
};
