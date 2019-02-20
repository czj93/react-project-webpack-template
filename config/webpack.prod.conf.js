const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    // devtool: 'source-map',
    output:{
        path: path.resolve(__dirname, "../dist"),
        filename: 'js/[name].[contenthash].js',
        chunkFilename: "js/[name].[contenthash].js",
        publicPath: 'https://caozj.cn/webpack-tempalte-demo/',
    },
    optimization:{
        minimizer: [
            new UglifyJSPlugin({ 
                // sourceMap: true // 启用source map
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['../dist'], { allowExternal: true }),
        new HtmlWebpackPlugin({
            title: 'Wbpack4 React 脚手架',
            template: 'public/index.html',
            inject: 'body', // 可选 ‘head’ js置于body底部
            meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },   // 压缩html
        }),
        new MiniCssExtractPlugin({
            // 提取css
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[name].[contenthash].css',
        }),
        new CopyWebpackPlugin([
            {
                from: path.join(process.cwd(), './public/'),
                to: path.join(process.cwd(), './dist/'),
                // ignore: ['*.json']
            }
        ]),
        // new UglifyJSPlugin({
           // sourceMap: true // 启用source map
        // }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':  JSON.stringify('production')
        })
        
    ]
});