var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    'app': './app/main.ts',
    'vendor': './app/vendor.ts'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
  },
  plugins: [
	new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
  ],

  resolve: {
    extensions: ['*', '.ts', '.js']
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
    ],
    noParse: [ /angular2\/bundles\/.+/ ]
  },

  devServer: {
    historyApiFallback: true
  }
};
