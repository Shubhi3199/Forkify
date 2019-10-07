const path=require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');  //used to inject src/index.html into dist/index.html which is finally to be distributed by webpack
module.exports={
    entry: ['babel-polyfill', './src/js/index.js'], // from where webpack will start bundling
    output:{                    //at the place where output will be collected
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {                  //to config. the dev server
        contentBase: './dist'     //from which webpack should serve our files
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",    // TO- (in dist. folder where webpack will serve files)
            template: "./src/index.html"  // FROM- (  )
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,   //this test will look for all the js files and apply babel-loader into all files with .jS extension
                exclude: /node_modules/, //so that babel-loader is not applied in the files inside node_modules
                use: {
                    loader: "babel-loader"
                }
            }

        ]
    }
};
