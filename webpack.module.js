const path = require('path')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

module.exports = {
    rules: [
        {
            test: /\.tsx?$/,
            exclude: [/node_modules/],
            enforce: 'pre',
            loader: 'ts-loader',
            options: {
                transpileOnly: true
            }
        },
        {
            test: /\.less$/,
            use: [
                {
                    loader: 'style-loader',
                    options: {
                        attributes: { 'data-injector': 'kwe-nav' },
                        injectType: 'singletonStyleTag'
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false, // `sourceMap: true` option will cause some problems.
                        importLoaders: 2
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        sourceMap: false,
                        plugins: [autoprefixer, cssnano]
                    }
                },
                {
                    loader: 'less-loader',
                    options: { sourceMap: false }
                }
            ]
        },
        {
            test: /\.(png|jpg|gif|ttf|eot|woff)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: { limit: 819200 }
                }
            ]
        },
        {
            test: /\.svg$/,
            use: [
                {
                    loader: 'svgo-inline-loader',
                    options: {
                        plugins: [
                            {
                                removeDimensions: true
                            },
                            {
                                removeViewBox: false
                            }
                        ]
                    }
                }
            ]
        }
    ]
}
