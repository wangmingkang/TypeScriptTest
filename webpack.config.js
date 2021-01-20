let path = require("path");

module.exports ={
    entry: [
        "./index.js"
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "Main.min.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },

}