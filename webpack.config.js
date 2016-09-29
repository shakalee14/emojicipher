var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    __dirname+'/src/browser.js'
  ],
  output: {
    publicPath: '/',
    path: __dirname+'/public',
    filename: 'browser.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      { 
        test: /\.js$/,
        include: __dirname+'/src',
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};