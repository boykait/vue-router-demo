import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  debugger
  if (response && response.data) {
    if (!response.data.token || response.data.token === '401') {
      localStorage.setItem('token', '401')
      localStorage.setItem('user', {})
    } else {
      if (response.config.url && response.config.url.indexOf('/login') > -1) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', response.data.user)
      }
    }
    return response.data
  }
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default axios
