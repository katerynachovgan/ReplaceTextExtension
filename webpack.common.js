const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        popup: path.resolve(__dirname, './src/popup.js'),
        background: path.resolve(__dirname, './src/background.js'),
        content: path.resolve(__dirname, './src/content.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        }, ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/popup.html'),
            filename: 'popup.html',
        }),
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                    from: './manifest.json',
                    to: 'manifest.json'
                },
                {
                    from: './src/images',
                    to: 'images/[name][ext]'
                },
            ],
        }),
    ],
}