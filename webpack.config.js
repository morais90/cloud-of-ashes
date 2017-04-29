var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './dist');
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
        status: {'colors': true, 'progress': true},
        contentBase: './dist/',
        lazy: true
    },
    module : {
        loaders : [
            {
                test : /\.jsx?$/,
                include : SOURCE_DIR,
                exclude: /node_modules/,
                loader : 'babel'
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
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
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