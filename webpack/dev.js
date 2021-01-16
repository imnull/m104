const path = require('path')
const base = require('./base')
module.exports = {
    ...base,
    mode: 'development',
    output: {
        filename: 'app.[fullhash:4].js',
        path: path.resolve(__dirname, 'dev-server'),
        // library: '$sn',
        // libraryTarget: 'umd',
    },
    devServer: {
        index: 'index.html',
        // contentBase: path.resolve(__dirname, '../static'),
        compress: true,
        // host: '',
        port: 9100
    }
}