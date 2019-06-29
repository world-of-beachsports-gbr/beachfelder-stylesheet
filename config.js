module.exports = {
  stylesheet: {
    development: {
      file: './src/beachfelder-stylesheet.scss',
      outFile: './dist/beachfelder-stylesheet.css',
      sourceMap: true,
      sourceMapRoot: `file:///${__dirname}/dist/`
    },
    production: {
      file: './src/beachfelder-stylesheet.scss',
      outFile: './dist/beachfelder-stylesheet.min.css',
      sourceMap: false,
      outputStyle: 'compressed'
    }
  }
}