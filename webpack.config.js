var webpack = require("webpack");

module.exports = {
	entry: {
		app: ["webpack/hot/dev-server", __dirname + "/src/entry.js"],
	},

	output: {
		path: __dirname + "/build",
		filename: "bundle.js",
		publicPath: "http://localhost:8080/build"
	},

	devServer: {
		contentBase: __dirname + "/build",
		publicPath: "http:://localhost:8080/build"
	},

	module: {
		loaders: [
			{ test: /\.js$/, loader: "babel-loader", query: { presets: ["react"] }, exclude: /node_modules/ },
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{ test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" }
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
