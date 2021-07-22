const withVue3 = require('@efox/emp-vue3')
const path = require('path')
const ProjectRootPath = path.resolve('./')
const { getConfig } = require(path.join(ProjectRootPath, './config'))

module.exports = withVue3(({ config, env, empEnv }) => {
  const confEnv = env === 'production' ? 'prod' : 'dev'
  const conf = getConfig(empEnv || confEnv)
  const port = conf.port
  const publicPath = conf.publicPath

  config.resolve.alias.set('@', path.resolve('./src/'))
  // 设置项目URL
  config.output.publicPath(publicPath)
  // 设置项目端口
  config.devServer.port(port).proxy({
    '/api/*': {
      target: 'https://dog.ceo/',
      changeOrigin: true,
    },
  })
  config.plugin('mf').tap((args) => {
    args[0] = {
      ...args[0],
      name: '<%= customInfo.moduleName %>',
      // 被远程引入的文件名
      filename: 'emp.js',
    }
    return args
  })
  // 配置 index.html
  config.plugin('html').tap((args) => {
    args[0] = {
      ...args[0],
      ...{
        // head 的 title
        title: 'EMP Vue3 TSX Template',
        // 远程调用项目的文件链接
        files: {},
      },
    }
    return args
  })
})
