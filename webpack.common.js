const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const plugins = [
	// new CleanWebpackPlugin(),
	new MiniCssExtractPlugin(),
	new HtmlWebpackPlugin({
		template: './src/index.html',
		favicon: './src/assets/favicon-32x32.png',
	}),
	new Dotenv(),
]

if (process.env.SERVE) {
	plugins.push(new ReactRefreshWebpackPlugin())
}

module.exports = {
	// entry: path.resolve(__dirname, 'src', 'index.js'),
	entry: ['babel-polyfill', './src/index.js'],

	resolve: {
		extensions: ['.js', '.jsx'],
	},

	module: {
		rules: [
			{
				test: /\.(jpeg|png|jpg|gif|pdf)$/i,
				type: 'asset/resource',
				parser: {
					dataUrlCondition: {
						maxSize: 30 * 1024,
					},
				},
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack', 'url-loader'],
			},
			{
				test: /\.(s[ac]|c)ss$/i,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: { publicPath: '' },
					},
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},

	plugins: plugins,

	devtool: 'source-map',
}
