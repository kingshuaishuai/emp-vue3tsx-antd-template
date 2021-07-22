import Axios from 'axios'
import { message } from 'ant-design-vue'
import jsCookie from 'js-cookie'

// const baseURL = 'http://www.mock.com'
const axios = Axios.create({
  // baseURL,
  timeout: 20000,
})
// 允许携带cookie
axios.defaults.withCredentials = true
// 请求头信息
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// 默认使用 application/json 形式
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 请求拦截器
axios.interceptors.request.use(
  (res) => {
    const token = jsCookie.get('token')
    if (token) {
      res.headers['Authorization'] = `Bearer ${token}`
    }
    return res
  },
  (err) => Promise.reject(err),
)
// 响应拦截器
axios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && err.response.data) {
      const code = err.response.status
      const msg = err.response.data.message
      message.error(`Code: ${code}, Message: ${msg}`)
    } else {
      message.error(`${err}`)
    }
    return Promise.reject(err)
  },
)

export default axios
