const env = process.env.EMP_ENV || 'dev'
const dev = {
  host: 'localhost',
  port: <%= customInfo.port %>,
  publicPath: 'http://localhost:<%= customInfo.port %>/',
}
const prod = {
  host: 'localhost',
  port: <%= customInfo.port %>,
  publicPath: 'http://localhost:<%= customInfo.port %>/',
}
const configs = { dev, prod }
exports.getConfig = (env) => {
  return configs[env] || {}
}

exports.config = configs[env]
