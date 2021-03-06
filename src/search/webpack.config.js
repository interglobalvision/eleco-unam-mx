const path = require('path');

module.exports = {
  entry: './public.js',
  externals: {
    jquery: "jQuery"
  },
  output: {
    filename: 'search.min.js',
    path: path.resolve( __dirname, '../../dist/js' )
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-react']
          }
        }
      }
    ]
  }
};
