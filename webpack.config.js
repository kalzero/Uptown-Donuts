const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlnpmugin = require("clean-webpack-plugin");
const extractPlugin = new ExtractTextPlugin({
    filename: "css/main.css"   
});

module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/bundle.js"
        //publicPath: "/dist"      
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,                
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
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "img/",
                            publicPath: "img/"
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            }
        ]
    },
    plugins: [    
        extractPlugin,
        new HtmlWebpackPlugin({    
            inject: false,
            template: "./src/index.html",
            filename: "index.html"
        })
        // new HtmlWebpackPlugin({    
        //     inject: false,
        //     template: "./src/views/_menu.html",
        //     filename: "./views/_menu.html"
        // }),
        // new HtmlWebpackPlugin({    
        //     inject: false,
        //     template: "./src/views/_home.html",
        //     filename: "./views/_home.html"
        // })
        //new CleanWebpackPlugin(["dist"])
    ]
};