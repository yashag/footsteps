const path = require('path');
const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

module.exports = {
  module: { rules },
  target: 'electron-renderer',
  plugins: plugins,
  resolve: {
    alias: {
      '@main': path.join(__dirname, 'src/main/main'),
      '@models': path.join(__dirname, 'src/models'),
      '@renderer': path.join(__dirname, 'src/renderer/renderer'),
      '@resources': path.join(__dirname, 'resources'),
      'react-dom': '@hot-loader/react-dom'
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.scss']
  }
};
