const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	plugins: [
		new HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './public/index.html'),
		}),
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [ 'style-loader', 'css-loader' ],
			},
		],
	},
	resolve: {
		extensions: [ '.js', '.jsx' ],
	},
	devServer: {
		port: 3000,
		hot: true,
		compress: true,
		client: {
			overlay: true,
		},
		static: {
			directory: path.resolve(__dirname, './build'),
		},
	},
};