module.exports = {
	entry: "./app/js/app.js",
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
			}
		]
	}
}