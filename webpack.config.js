const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

let mode = 'development'
let target = 'web'

const plugins = [
	new MiniCssExtractPlugin(),
	new HtmlWebpackPlugin({
		template: './src/index.html',
		// favicon: './src/assets/favicon-32x32.png',
	}),
	new Dotenv(),
]

if (process.env.NODE_ENV === 'production') {
	mode = 'production'
	// target = 'browserslist'
}

if (process.env.SERVE) {
	plugins.push(new ReactRefreshWebpackPlugin())
}

module.exports = {
	mode: mode,
	target: target,

	// entry not required if using `src/index.js` default

	// output not required if using `dist/main.js` default
	output: {
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'assets/[name].[hash:6][ext][query]',
		clean: true,
	},

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
					},
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
			{
				test: /\.less$/i,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'less-loader',
						options: {
							lessOptions: {
								javascriptEnabled: true,
							},
						},
					},
				],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					// without additional settings, this will reference .babelrc
					loader: 'babel-loader',
				},
			},
		],
	},

	plugins: plugins,

	devtool: 'source-map',

	// required if using webpack-dev-server
	devServer: {
		static: path.join(__dirname, 'dist'),
		port: 3001,
		historyApiFallback: true,
		hot: true,
	},
}
