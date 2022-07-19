const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin(
      { template: './src/index.html' }
    )
  ],
  module: {
    rules: [
      { 
        test: /\.scss$/, 
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ]
      },
    ],
  },
  
};