const path = require('path')
const base = require('./base')
module.exports = {
    ...base,
    mode: 'production',
    output: {
        filename: 'app.[fullhash:4].js',
        path: path.resolve(__dirname, '../dist'),
        // library: '$sn',
        // libraryTarget: 'umd',
    },
}