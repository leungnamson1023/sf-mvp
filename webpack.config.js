const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client/app');

const config = {
  entry: APP_DIR,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        exclude: [
          path.join(__dirname, 'node_modules'),
        ],
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
};

module.exports = config;
