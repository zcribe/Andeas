const PUBLIC_PATH = "http://localhost:8081/assets/bundles/";
const ENTRY_PATH = "./frontend/src/";
const ENTRY_FILES = {index:"index.js", contact:"contact.js", services:"services.js", reserve:"reserve.js"};
const OUTPUT_DIR = "/home/erlend/PycharmProjects/andeas/frontend/static/frontend";
const OUTPUT_FILENAME = "[name].js";
const SASS_FILE_PATHS = [
    "/home/erlend/PycharmProjects/andeas/frontend/src/",
    "/home/erlend/PycharmProjects/andeas/frontend/src/components",
    "/home/erlend/PycharmProjects/andeas/node_modules/carbon-components",
    "/home/erlend/PycharmProjects/andeas/node_modules/"
];

const ENTRY_WITH_PATH = function() {
    let asi = {};
    for (let i in ENTRY_FILES){
        asi[i] = ENTRY_PATH + i
    }
    return asi

}();

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    entry: ENTRY_WITH_PATH,

    output: {
        path: OUTPUT_DIR,
        publicPath: PUBLIC_PATH,
        filename: OUTPUT_FILENAME,

    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'fast-sass-loader',
                        options: {
                            sassOptions: {
                                indentWidth: 4,
                            },
                            includePaths:SASS_FILE_PATHS
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|png)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]'
                    }
                }

            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new BundleTracker({filename: './webpack-stats.json'}),
    ],
    devServer: {
        compress: true,
        port: 8081
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            chunks: "initial",
            name: "vendor",
            enforce: true
          }
        }
      }
    }
};