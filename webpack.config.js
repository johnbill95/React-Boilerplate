const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
  output: {
    path: DIST_DIR + '/app',
    filename: 'bundle.js',
    publicPath: '/app/',
  },
  entry: SRC_DIR + '/app/index.jsx',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
};

module.exports = config;
