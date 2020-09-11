const eslint = require('eslint');
const webpack = require('webpack');
const convert = require('koa-connect');
const history = require('connect-history-api-fallback');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
// const path = require('path');
const commonPaths = require('./paths');
const Dotenv = require('dotenv-webpack');

// const { definitions } = new Dotenv();
console.log('===== `${commonPaths.root}/.env`: ', `${commonPaths.root}/.env`)
module.exports = {
    entry: commonPaths.entryPath,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /(node_modules)/,
        },
        {
          test: /\.(woff2|ttf|woff|eot)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                outputPath: commonPaths.fontsFolder,
              },
            },
            // {
            //   loader: 'url-loader'
            // },
          ],
        },
      ],
    },
    serve: {
      add: app => {
        app.use(convert(history()));
      },
      content: commonPaths.entryPath,
      dev: {
        publicPath: commonPaths.outputPath,
      },
      open: true,
    },
    resolve: {
      modules: ['src', 'node_modules'],
      extensions: ['*', '.js', '.jsx', '.json', '.css', '.scss'],
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: commonPaths.templatePath,
        filename: commonPaths.indexFilePath
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'async',
      }),
      // new webpack.DefinePlugin({ ...definitions }),
      new Dotenv({
        path: `${commonPaths.root}/.env`,
        safe: false,
        // allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
        // systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
        silent: false, // hide any errors
        // defaults: false // load '.env.defaults' as the default values if empty.

      }),
    ],
};
