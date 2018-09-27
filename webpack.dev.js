const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const NodemonPlugin = require('nodemon-webpack-plugin');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

module.exports = merge(common, {
  entry: ['webpack/hot/poll?1000', './src/main.ts'],
  watch: false,
  watchOptions: {
    ignored: ['test', 'node_modules'],
  },
  devtool: 'cheap-source-map',
  mode: 'development',
  plugins: [
    new webpack.IgnorePlugin(/^pg-native$/),
    new FilterWarningsPlugin({
      exclude: [
        /react-native-sqlite-storage/,
        /mongodb/,
        /mssql/,
        /mysql/,
        /mysql2/,
        /oracledb/,
        /pg-query-stream/,
        /redis/,
        /sqlite3/,
      ],
    }),
    new NodemonPlugin({
      nodeArgs: ['--inspect-brk=9229'],
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
