const prompts = [
  {
    type: 'input',
    name: 'moduleName',
    message: '请输入当前项目的模块名称(唯一标识当前项目)',
    default: 'base',
  },
  {
    type: 'input',
    name: 'port',
    message: '请输入当前项目端口号',
    default: '8080',
    validate(port) {
      const done = this.async()
      setTimeout(() => {
        if (!/^\d+$/.test(port)) {
          done(`端口号不合法：端口号需为整数类型`)
          return;
        }
        done(null, true)
      }, 0)
    },
    filter(port) {
      if (!/^\d+$/.test(port)) {
        return port
      }
      return parseInt(port.trim())
    }
  },
]

module.exports = {
  prompts
}