var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./src/client.js",
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel'}
        ]
    }
};