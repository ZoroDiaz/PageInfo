const CopyPlugin = require('copy-webpack-plugin');
const Assets = require('./assets');
const path = require('path');
module.exports = {
    entry:'./src/app.js',
    output:{
        path:__dirname + '/dist',
        filename:'bundle.js'
    },
    plugins: [
        new CopyPlugin({
            patterns: Assets.map(asset => {
                return{
                    from: path.join(__dirname,`../../assets/${asset}`),
                    to: path.resolve(__dirname,'assets')
                }
            })
        })
    ]
}