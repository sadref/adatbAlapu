var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'babel-polyfill',
    'script-loader!jquery/dist/jquery.min.js',
    './app/index'
  ],
  output: {
    path: __dirname + "/public/",
    filename: './bundle.js',
    publicPath: '/'
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
  ],
  module: {
    loaders: [
      { test: /\.json$/, loader: "json-loader" },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react','stage-0','stage-1','stage-2','stage-3']
        },
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css?$/,
        loaders: ['style-loader', 'raw-loader']
      },
      {
        test: /\.(gif|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      }
    ]
  }
};