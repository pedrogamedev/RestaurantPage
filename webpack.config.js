const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = 
{
    entry:{
        index: './src/index.js',
        pagesetup: './src/pagesetup.js',
    },
    mode: 'development',
    devServer:{
        static: './dist',
    },
    devtool: 'inline-source-map',
    plugins: 
    [
        new HtmlWebpackPlugin(
        {
            title:'Development',
            template: './src/index.html',
        }),
    ],
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};