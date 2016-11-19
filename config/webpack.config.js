var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',

    entry: {
        'main': './src/mouse-icon.module.ts'
    },

    output: {
        path: './dist',
        publicPath: './',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [{
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            { test: /\.css/, loader: 'raw' },
            { test: /\.json/, loader: 'json' },
            { test: /\.scss/, loader: 'raw!sass' },
            { test: /\.html/, loader: 'raw' }
        ]
    },

    target: "web"
};