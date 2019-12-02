const path = require('path');

module.exports = {
  mode: 'development', // 'production' | 'none'
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8080,
    open: true,
    watchContentBase: true,
  },
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader'
    }]
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: [
      '.ts',
      '.js'
    ]
  }
}
