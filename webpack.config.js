var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './docs');
var SOURCE_DIR = path.resolve(__dirname, './src');

module.exports = {
    entry: SOURCE_DIR + '/main.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        contentBase: './docs/',
        lazy: true
    },
    module : {
        loaders : [
            {
                test : /\.jsx?$/,
                exclude: /node_modules/,
                loader : 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            API_URL: JSON.stringify('http://localhost:8000/')
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]
}