var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
  	{
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
    	}
    },
    { 
      test: /\.css$/, 
      loader: "style-loader!css-loader" 
    },    
    { 
      test: /\.png$/, 
      loader: "file-loader" 
    },
    { 
      test: /\.jpg$/, 
      loader: "file-loader" 
    },
    {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
      loader: 'file-loader'
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
      loader: 'file-loader'
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
      loader: 'file-loader'
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
      loader: 'file-loader'
    }
	]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'app/index.html'
  })]
  
};