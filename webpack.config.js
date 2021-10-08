const path = require('path')
const mode = process.env.NODE_ENV || 'development'

module.exports = {
	// mode defaults to 'production' if not set
	mode: mode,

	// entry not required if using `src/index.js` default
	// output not required if using `dist/main.js` default
	output: {
		path: path.resolve(__dirname, 'dist'),
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					// without additional settings, this will reference .babelrc
					loader: 'babel-loader',
				},
			},
		],
	},

	devtool: 'source-map',

	// required if using webpack-dev-server
	devServer: {
		static: path.join(__dirname, 'dist'),
		port: 3001,
		historyApiFallback: true,
		hot: true,
	},
}
