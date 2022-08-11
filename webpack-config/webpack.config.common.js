const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const helpers = require('./helpers');
 
module.exports = {
    entry: './src/main.ts',
    resolve: {
        extensions: ['.js', '.ts']
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.js$/,
                exclude : [
                    /\bcore-js\b/,
                    /\bwebpack\/buildin\b/
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        sourceType: 'unambiguous',
                        presets: [
                            '@babel/preset-env',
                            // '@babel/preset-typescript',
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            { // 글꼴 파일을 복사하지 않고 문자열 형태로 번들 파일에 첨부해주는 역할.
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]?[hash]',
                        publicPath: './dist/',
                        // limit: 10000 // 10kb 제한
                    },
                }
            },
            { // 파일들을 복사하는 역할.
                test: /\.(txt|csv|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        publicPath: './dist/',
                        name: '[name].[ext]?[hash]', // hash 위함.
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({ 
            root: helpers.root(), 
            verbose: true 
        }),

        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),

        new CopyWebpackPlugin(
            {
                patterns: [
                    { from: './src/assets/**', to: './assets' }
                ]
            }
        ),
    ]
};
