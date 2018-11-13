const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/controller.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { test: /\.css/, use: ['style-loader', 'css-loader']},
            { test: /\.ts/, use: 'ts-loader', exclude: /node_modules/}
        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
}
