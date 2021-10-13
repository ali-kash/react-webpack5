const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const { EnvironmentPlugin } = require('webpack')

const devConfig = {
	mode: 'development',
	target: 'web',

	devServer: {
		static: path.resolve(__dirname, 'build'),
		port: 3000,
		historyApiFallback: true,
		hot: true,
	},

	plugins: [
		new EnvironmentPlugin({
			PUBLIC_URL: 'http://localhost:3000/',
		}),
	],
}

module.exports = merge(commonConfig, devConfig)
