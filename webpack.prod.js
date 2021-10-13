const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const { EnvironmentPlugin } = require('webpack')

const ASSET_PATH = process.env.ASSET_PATH || '/'

const prodConfig = {
	mode: 'production',
	target: 'browserslist',

	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: ASSET_PATH,
		assetModuleFilename: 'assets/[name].[hash:6][ext][query]',
		clean: true,
	},

	devServer: {
		static: path.resolve(__dirname, 'build'),
		historyApiFallback: true,
		hot: true,
	},

	plugins: [
		new EnvironmentPlugin({
			PUBLIC_URL: '',
		}),
	],
}

module.exports = merge(commonConfig, prodConfig)
