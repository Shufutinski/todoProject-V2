const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node-modules/,
                use: 'ts-loader'
            },
            {
                test: /\.(c|sa|sc)ss$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        historyApiFallback: true
    }
}