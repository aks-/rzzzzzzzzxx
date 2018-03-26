const path = require('path')

module.exports = {
  context: __dirname,
  entry: './app/index.js',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'build.js'
  },
  resolve: {
    extensions: ['.js']
  },
  node: {
    __dirname: true
  },
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: `${__dirname}/app`,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env'],
          plugins: [
            'transform-object-rest-spread'
          ]
        }
      }  
    ]
  }
}
