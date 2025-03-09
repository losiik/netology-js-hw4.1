const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/index.js', // точка входа
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // очистка каталога dist перед сборкой
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // обработка css-файлов
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader', // если необходима транспиляция ES6+
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // шаблон HTML
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  mode: 'development', // можно переключить на production при сборке
  devtool: 'source-map', // для отладки
};