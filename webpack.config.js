const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		app: './src/index.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /nodeModules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(png|jpg|gif|svg)$/i,
				type: 'asset/inline',
			},
			{
				test: /\.(less|module.less)$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							modules: {
								localIdentName: '[name]__[local]___[hash:base64:5]',
							},
						},
					},
					{ loader: 'less-loader' },
				],
			},
		],
	},
	plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
	resolve: {
		extensions: ['.js', 'jsx'],
	},
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
		port: 4073,
		hot: true,
	},
};
