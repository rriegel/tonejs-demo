const path = require('path');
const webpack = require('webpack');

const SRC_DIR = path.join(__dirname, '/src');
const OUT_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: path.join(SRC_DIR, 'index.js'),
  output: {
    path: path.resolve(OUT_DIR),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}