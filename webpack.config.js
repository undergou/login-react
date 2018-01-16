var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:"./src/index.js",
    output: {
        path: __dirname + "/public/build",
        publicPath: "build/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: './public',
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/, /public/],
                query:
                    {
                        presets:['react'],
                        plugins: ["jsx-control-statements"]
                    }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'less-loader'],
                    publicPath: '/public',
                }),
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader','less-loader'],
                    publicPath: '/public',
                }),
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/,
                loader: "babel-loader",
                query:
                    {
                        presets:['react'],
                        plugins: ["jsx-control-statements"]
                    }
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};