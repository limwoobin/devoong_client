const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const port = process.env.PORT || 3000;
const path = require('path');
const dotenv = require('dotenv');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env , options) => {
    console.log('env' , env);
    console.log('options' , options);
    dotenv.config({
        path: `.env.${options.state || 'dev'}`
    });

    console.log('Server State:' + options.state);

    return {
        mode:'none',
        entry: [
            './src/index.tsx',
        ],
        output:{
            filename: 'bundle.js',
            path: path.resolve(__dirname + '/build'),
            publicPath: '/',
        },
        resolve:{
            extensions: [".jsx" , ".js" , ".tsx" , ".ts"],
            alias: {
                '@': path.resolve(__dirname , 'src')
            }
        },
        module:{
            rules:[
                {
                    test:/\.(js|jsx)$/,
                    exclude:/node_modules/,
                    use:['babel-loader']
                },
                {
                    test:/\.(ts|tsx)$/,
                    exclude:/node_modules/,
                    use:['ts-loader']
                },
                {
                    test: /\.(css|scss)$/,
                    // exclude: node_modules/,
                    use: [
                            'style-loader',
                            'css-loader',
                            'sass-loader',
                    ],
                },
                {
                    test: /\.(png|jpg)$/,
                    exclude: /node_modules/,
                    use: ['file-loader']
                },
                {
                    test:/\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: {minimize: true}
                        }
                    ]
                },
                {
                    test: /\.(ttf|eot|woff|woff2)$/,
                    loader: 'file-loader',
                },
                {
                    test : /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use : {
                        loader : "url-loader",
                        options : {
                            name: '[name].[ext]?[hash]',
                            limit : 10000
                        }
                    }
                }
            ]
        },
        optimization: {
            splitChunks: {
                chunks: 'all'
            },
            minimize: true,
            minimizer: [new TerserPlugin()]
        },
        devtool: 'inline-source-map',
        plugins:[
            new HtmlWebpackPlugin({
                template: './public/index.html',
                favicon: './public/favicon.png',
                filename: 'index.html'
            }),
            new webpack.DefinePlugin({
                'process.env.REACT_APP_BASE_URL': JSON.stringify(process.env.REACT_APP_BASE_URL)
            }),
            new webpack.EnvironmentPlugin(['REACT_APP_BASE_URL']),
        ],
        devServer: {
            port: port,
            open: true,
            historyApiFallback: true,
            proxy : {
                // "**": {
                //     target: 'http://localhost:8080',
                //     changeOrigin: true,
                // }
                "/limwoobin": {
                    target: 'https://raw.githubusercontent.com',
                    changeOrigin: true,
                }
            }
        }   
    }
}; 