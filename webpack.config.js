const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    target: 'web',
    context: path.resolve(__dirname, ''),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './src'),
        chunkFilename: '[name].bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: './src',
        stats: 'errors-only',
        hot: true
    },
    resolve: {
        extensions: ['.js']
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
