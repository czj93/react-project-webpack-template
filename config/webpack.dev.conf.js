const merge = require('webpack-merge');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const mocker = require('../mock')

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../dist'),
        chunkFilename: "js/[name].js",
        publicPath: ""
    },
    optimization:{
        // 关闭优化，提升打包性能
        removeEmptyChunks: false,
        removeAvailableModules: false
    },
    plugins:[
        new CopyWebpackPlugin([
            {
                from: path.join(process.cwd(), './public/'),
                to: path.join(process.cwd(), './dist/'),
                // ignore: ['*.json']
            }
        ]),
        new HtmlWebpackPlugin({
            title: 'Wbpack4 React 脚手架',
            template: path.resolve(__dirname, '../public/index.html'),
            inject: 'body', // 可选 ‘head’ js置于body底部
            meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },   // 压缩html
        }),
        // 设置全局变量
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':  JSON.stringify('development')
        }),
        new webpack.HotModuleReplacementPlugin({})
    ],
    devtool: 'inline-source-map',
    devServer: {
        port: '8082',
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        historyApiFallback: true,
        hot: true,
        https: false,
        noInfo: true,
        open: false,
        proxy: {},
        before(app){
            mocker(app)
        }
    }
});