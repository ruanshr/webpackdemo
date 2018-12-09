const webpack = require('webpack');
const path = require('path');
const MyWebpackPlugin = require('./plugins/MyWebpackPlugin');
module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    entry: {
        app: [__dirname + "/src/customer.js", __dirname + "/src/index.js"],
        print: __dirname + "/src/print.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [new MyWebpackPlugin({ options: true })],

    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), //设置基本目录结构,本地服务器所加载的页面所在的目录
        host: 'localhost', //服务器的IP地址，可以使用IP也可以使用localhost
        inline: true, //实时刷新
        compress: true, //服务端压缩是否开启，一般设置为开启，
        historyApiFallback: true, //不跳转
        port: 8080 //配置服务端口号，建议不使用80，很容易被占用，这里使用了1818
    }
}