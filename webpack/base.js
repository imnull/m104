const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // mode: 'development',
    // mode: 'production',
    // mode: 'none',
    entry: {
        main: './src/index.js'
    },
    // devtool: 'inline-source-map',
    // output: {
    //     filename: 'app.[fullhash:4].js',
    //     path: path.resolve(__dirname, 'dist'),
    //     // library: '$sn',
    //     // libraryTarget: 'umd',
    // },
    resolve: {
        extensions: ['.tsx', '.jsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dev-server'),
        compress: true,
        port: 9100
    }
}