const path = require('path'),
    pkjson = require('./package.json'),
    ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (env, argv) => {
    const filename = 'script' + (argv.mode === 'production' ? '.' + pkjson.version + '.min' : '') + '.js';
    return {
        entry: './src/index.tsx',
        output: {
            filename,
            path: path.resolve(__dirname, 'public')
        },
        resolve: {
            extensions: ['.jsx', '.js', '.ts', '.tsx']
        },
        module: {
            rules: [
                {
                    test: /\.(js|ts)x?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader'
                        }
                    ]
                }
            ]
        },
        stats: {
            // all: true,
            all: false,
            builtAt: true,
            cached: true,
            errors: true,
            errorDetails: true,
            logging: 'warn',
            moduleTrace: true,
            outputPath: true,
            //warnings: true       
        },
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        },
        plugins: [new ESLintPlugin({ context: './src', extensions: ['.js', '.jsx', '.ts', '.tsx'] })]
    };
};
