const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LessCleanCss = require('less-plugin-clean-css');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DIST_PATH = path.resolve(__dirname, '../dist');
const APP_PATH = path.resolve(__dirname, '../src');

const devMode = process.env.NODE_ENV !== 'production'

const resolve = (dir) => {
    return path.join(__dirname, '..', dir)
  }

module.exports = {
    entry: {
        index: './src/index.js',
        // vendors: './src/vendors.js'
    },
    module:{
        rules:[
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src']
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                include: [resolve('src'), resolve('node_modules/p-min-delay/')],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(less|css)$/,
                use: [
                    { loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader }, // creates style nodes from JS strings 
                    { loader: "css-loader"}, // translates CSS into CommonJS options:{ minimize: true }
                    {
                        loader: "postcss-loader",//自动加前缀
                        options: {
                            plugins:[
                                require('autoprefixer')({
                                    browsers:['last 5 version']
                                })
                            ]
                        }
                     },
                    { 
                        loader: "less-loader" ,
                        options:{
                            plugins: [
                                new LessCleanCss({ advanced: true })
                            ]
                        }
                    } // compiles Less to CSS
                ]
            },
            {
                test: /\.(png|jpg|gif|woff|svg|eot|woff2|tff)$/,
                loader: 'url-loader',  // 当你图片大小小于这个限制的时候，会自动启用base64编码图片
                exclude: /node_modules/,
                options:{
                    limit: 8129,
                    name: devMode ? 'images/[name].[ext]' : 'images/[name].[contenthash].[ext]',
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.less', '.json']
    },
    optimization: {
        // 如果要启用 懒加载， 则 runtimeChunk 不能为 single
        runtimeChunk: {
            name: "manifest" 
        },
        // 提取公共模块
        splitChunks: { 
            cacheGroups:{
                common: {
                    name: "common",
                    chunks: "all",
                    minSize: 1,
                    priority: 0,
                    minChunks: 2
                  },
                  // 首先: 打包node_modules中的文件
                  vendor: {
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    priority: 10    // 权重
                }
            }
        }
    },
    plugins: [
        // 模块自动导入
        // new webpack.ProvidePlugin({
        //     _: 'lodash'
        // })
        new webpack.NamedModulesPlugin()
    ]
}