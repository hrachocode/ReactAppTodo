var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		'node_modules/jquery/dist/jquery.min.js',
		'node_modules/foundation-sites/dist/js/foundation.min.js',
		'./app/jsx/index.jsx'
		],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jQuery',
			'jQuery': 'jQuery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		modulesDirectories: [
			'node_modules',
			'./app/Components'
		],
		alias: {
			// CSS
			AppStyle: 'app/styles/app.scss'
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components|none_rendering_data)/
			}
		]
	},
	sassLoader: {
		includePaths: [
			path.resolve(__dirname, './node_modules/foundation-sites/scss')
		]
	},
	devtool: 'cheap-module-eval-source-map'
};