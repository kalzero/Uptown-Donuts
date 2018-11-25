const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const extractPlugin = new ExtractTextPlugin({
    filename: "css/main.css",
    allChunks: true
});
const htmlWebPack = new HtmlWebpackPlugin({
    filename: "index.html",
    template: "./src/index.html"
});

module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/bundle.js",
        publicPath: "/dist"   
    },
    module: {
        rules: [
            {
                test: /\.js$/,                
                use: [                                        
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["es2015"]
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                // order matters in the use property
                use: extractPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            }
        ]
    },
    plugins: [    
        extractPlugin,
        htmlWebPack
    ]
};