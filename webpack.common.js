const path = require('path');
// const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.mjs', '.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  // externals: [
  //   nodeExternals({
  //     whitelist: ['webpack/hot/poll?1000'],
  //   }),
  // ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
  },
};
