var path = require('path');
var webpack = require('webpack');


var paths = {
	src: path.resolve(__dirname, 'src'),
	dist: path.resolve(__dirname, 'dist')
};


// jscs:disable
module.exports = {
	// Entry point for the bundle.
	// Type array : All modules are loaded on startup
	entry:[
		'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
		'webpack/hot/only-dev-server',
		paths.src + '/main.jsx'
	],

	publicPath:  paths.dist,

	// Output
	output: {
		// The output directory as absolute path
		path: paths.dist,

		// Filename relative to output path
		filename: 'bundle.js'
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],

	devServer: {
		hot: true
	},


	resolve: {
		extensions: ['', '.js', '.jsx'] // skip the extensions when requiring/importing modules
	},

		// Module Loaders
	module: {
		// JSX loaders
		loaders: [
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			},

			{
				// "test" is commonly used to match the file extension
				test: /\.js/,

				// "include" is commonly used to match the directories
				include: [ paths.src],

				// "exclude" should be used to exclude exceptions
				// try to prefer "include" when possible
				//exclude: /node_modules/,

				// the "loader"
				//loader: 'babel-loader',

				// react-hot to hot load for react components
				loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react']

				/*	This is for "^3.0.0-beta.0"
				query: {
					presets: ['es2015', 'react'],
					plugins: ['react-hot-loader/babel']
				}
				*/
			}
		]
	}
};
