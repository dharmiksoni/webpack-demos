// import path from 'path';
const path = require('path');

module.exports = {
    entry: {
        main: "./src/index.js"
    },
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    devServer: {
        // contentBase: "./dist"
        static: {
            publicPath: path.join(__dirname, 'dist'),
        }
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '../dist'), // and update this line
            // publicPath: '/',
        }
    }
}