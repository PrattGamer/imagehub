var path = require('path');
var APP_DIR = path.resolve(__dirname, 'client');
var BUILD_DIR = path.resolve(__dirname, 'public/dist/js');


const config = {
  entry: APP_DIR + '/app.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include : APP_DIR,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
module.exports = config;