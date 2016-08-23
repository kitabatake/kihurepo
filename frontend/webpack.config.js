var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    'kihus/show': './kihus/show/index.js',
    vendor: ['react', 'react-dom']
  },
  output: { 
    path: "../app/assets/javascripts/webpack",
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ],
  devServer: {
    contentBase: '../'
  }
}