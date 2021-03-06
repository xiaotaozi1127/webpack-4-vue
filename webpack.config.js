const path = require('path');

module.exports = {
	entry: {
		app: [ './src/app.js' ]
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.vue$/,
				use: {
					loader: "vue-loader"
				}
			}
		]
	}
}