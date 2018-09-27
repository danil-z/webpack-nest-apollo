const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  entry: ['./src/main.ts'],
  mode: 'production',
  watch: false,
  plugins: [
    new webpack.IgnorePlugin(/^pg-native$/),
    new FilterWarningsPlugin({
      exclude: [
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
  ],
});
