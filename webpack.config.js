const path=require('path');
module.exports={
    entry: './src/js/index.js', // from where webpack will start bundling
    output:{                    //at the place where output will be collected
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    }
};
