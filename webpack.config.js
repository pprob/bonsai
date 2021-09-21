/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackTagsPlugin = require('html-webpack-tags-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/client/index.ts'),
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx|ts)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'src/client/index.html',
    }),
    new HTMLWebpackTagsPlugin({
      tags: ['config/main.js'],
      append: false,
      usePublicPath: false,
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: './dist',
    proxy: {
      '/config': 'http://localhost:3000',
      '/api': 'http://localhost:3000',
    },
    hot: true,
    port: '8080',
  },
};
