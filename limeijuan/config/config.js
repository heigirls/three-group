const path = require('path');
const api = require('../src/mock')

module.exports = {
    base: {
        entry: path.join(__dirname, "../src/main.js"),
        outputPath: path.join(__dirname, "../dist"),
        outputFileName: "[id]-[name]-[chunkHash:5].js", //区分hash和chunkHash:都可防止缓存---chunkhash专一改，hash一改全改
        templatePath: path.join(__dirname, "../src/index.html"),
        htmlMinify: {
            removeComments: true, //去除注释
            collapseWhitespace: true, //去除空格
            removeAttributeQuotes: true, //移除属性的引号
            removeEmptyAttributes: true, //去除空属性
        }

    },
    babel: {
        presets: [
            "env"
        ]
    },
    dev: {
        contentBase: path.join(__dirname, "../dist"),
        host: 'localhost',
        port: 8088,
        open: true,
        before: api,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: { '^/api': '/apis' },
                secure: false
            }
        }
    },
    build: {
        uglifyJsSourceMap: false,
        devtool: false
    }
}