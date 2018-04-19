const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, '../src/main.js'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'js/my-first-webpack.bundle.js'
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.js$/,
            use: 'babel-loader'
        }, {
            test: /\.(png | jpg | gif)$/,
            use: 'url-loader'
        }, {
            test: /\.vue$/,
            use: 'vue-loader'
        }]
    },
    plugins: [
        new UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/index.html'),
            filename: "index.html"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        // watchContentBase: true,
        // compress: true,
        host: 'localhost',
        port: 9999,
        open: true,
        setup(app) {
            app.get('/apis', function(req, res) {
                const dataJson = require('../Mock/index.json');
                res.send(dataJson)
            })
        },
        proxy: {
            '/api': {
                target: "http://localhost:3000",
                pathRewrite: { '^/api': '/apis' },
                secure: false
            }
        }
    }

};