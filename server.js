'use strict';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var express = require('express');
var app = express();

(function initWebpack() {
  new WebpackDevServer(webpack(config), {
    contentBase: './public',
    publicPath: '/',
    hot: true,
    historyApiFallback: true
  }).listen(3000, 'localhost', function (err, result) {
    if (err) {
      return console.log(err);
    }
    console.log('Listening at http://localhost:3000/');
  });
})();

app.get(/.*/, function root(req, res) {
  res.sendFile(__dirname + '/index.html');
});