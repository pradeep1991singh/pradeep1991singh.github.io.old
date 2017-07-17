var path = require('path');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    filename: 'percentage-counter.js',
    path: path.resolve(__dirname, 'dist/scripts'),
    libraryTarget: 'var',
    library: 'percentify'
  },
  module: {
    loaders: [{ test: /\.js$/, loader: 'babel-loader' }]
  }
};
