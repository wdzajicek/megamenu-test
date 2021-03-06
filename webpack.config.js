process.traceDeprecation = true;
const path = require('path');
const HashPlugin = require('hash-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  mode: 'production',
  watch: true,
  //entry: path.join(__dirname, 'webpack', 'main'),
  entry: {
    'main': './assets/js/script/all.js',
    'ytCarousel': './assets/js/ytCarousel/initYouTubeCarousel.js',
    'games': './assets/js/games/games.js',
    'table': './assets/js/table/table.js',
    'roster': './assets/js/roster/roster.js',
    'stats': './assets/js/stats/stats.js'
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'assets', 'js', 'dist')
    //libraryTarget: 'var',
    //library: 'entryPoint'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HashPlugin({ path: './_data/',fileName: 'hash.yml' }),
    new CleanWebpackPlugin({ path: './assets/js/dist/' })
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  }
};

module.exports = config;
