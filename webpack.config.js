module.exports = {
    context: __dirname + "/app",
    entry: {
        javascript: "./app.js",
        html: "./index.html"
    },
    output: {
        filename: "app.js",
        path: __dirname + "/dist",
        resolve: {
            extensions: ['', '.js', '.jsx', '.html']
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["react-hot", "babel-loader?"+JSON.stringify({
                    presets:['es2015', 'react']
                })]
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            }
        ]
    }
}