const path = require('path');

const src = path.resolve(__dirname, 'src/');
const dist = path.resolve(__dirname, 'dist/');

module.exports = {
    entry: src,
    resolve: {
        root: src,
        extensions: [
            '',
            '.js',
            '.jsx',
            'index.js'
        ]
    },
    output: {
        path: dist,
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                include: src,
                test: /.jsx?/,
                loader: 'babel'
            },
            {
                include: src,
                test: /.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
};