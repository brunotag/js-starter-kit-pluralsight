import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'inline-source-map', //one of many modes
  noInfo: false, //verbose
  entry: [
    path.resolve(__dirname, '../src/index')  //app entry point
  ],
  target: 'web', //web vs node vs elektron
  output: {
    path: path.resolve(__dirname, '../src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'src/index.html',
      inject: true
    }),
  ],
  module: {
    loaders: [ //how to handle different file types
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.css$/, loaders: ['style', 'css'] } //it's efficient to bundle css into javascript files
    ]
  }
}
