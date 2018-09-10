import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map', //mode recommended for production
  noInfo: false, //verbose
  entry: [
    path.resolve(__dirname, '../src/index')  //app entry point
  ],
  target: 'web', //web vs node vs elektron
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    new webpack.optimize.DedupePlugin(), //dedupes packages while bundling
    new webpack.optimize.UglifyJsPlugin() //minify
  ],
  module: {
    loaders: [ //how to handle different file types
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.css$/, loaders: ['style', 'css'] } //it's efficient to bundle css into javascript files
    ]
  }
}
