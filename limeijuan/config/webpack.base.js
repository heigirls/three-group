const path = require('path');
const config = require('./config'),
    cleanWebpackPlugin = require('clean-webpack-plugin'),
    htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //入口---可单可多
    entry: config.base.entry,
    //出口
    output: {
        path: config.base.outputPath,
        filename: "js/" + config.base.outputFileName
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|gif|png)$/,
                use: ['url-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    options: config.babel
                }]

            }
        ]
    },
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            "vue": 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        //自动删除之前的文件
        new cleanWebpackPlugin([config.base.outputFileName]),
        new htmlWebpackPlugin({
            template: config.base.templatePath
        })
    ]
}