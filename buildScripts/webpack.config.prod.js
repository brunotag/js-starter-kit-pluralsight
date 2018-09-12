import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map', //mode recommended for production
  noInfo: false, //verbose
  entry: {
    main: path.resolve(__dirname, '../src/index'),   //main entry point,
    vendor: path.resolve(__dirname, '../src/vendor') //third party libraries entry point
  },
  target: 'web', //web vs node vs elektron
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ //bundle splitting
      name: 'vendor'
    }),
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
      inject: true,
      trackJSToken: 'b7e6a8f9644d4123a6aa5977d8cfd751'
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
