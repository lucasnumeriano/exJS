module.exports = {
    entry: ['./src/index.js', './src/exemplo.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    }
}