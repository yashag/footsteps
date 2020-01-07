const path = require('path');
const rules = require('./webpack.rules');

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/main/main.ts',
  // Put your normal webpack config below here
  mode: 'development',
  devtool: 'source-map',
  target: 'electron-main',
  module: {
    rules: require('./webpack.rules'),
  },
  resolve: {
    alias: {
      '@main': path.join(__dirname, 'src/main/main'),
      '@models': path.join(__dirname, 'src/models'),
      '@renderer': path.join(__dirname, 'src/renderer/renderer'),
      '@assets': path.join(__dirname, 'assets'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json']
  },
};