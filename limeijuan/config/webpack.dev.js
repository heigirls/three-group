var path = require("path")
var htmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin') //拷贝
var webpack = require("webpack")
var config = require("./config")
const merge = require('webpack-merge') //合并
const baseWebpack = require("./webpack.base.js")
module.exports = merge(baseWebpack, {
    devServer: {
        contentBase: config.dev.contentBase,
        host: config.dev.host,
        port: config.dev.port,
        open: config.dev.open,
        before: config.dev.before,
        proxy: config.dev.proxy
    }
})