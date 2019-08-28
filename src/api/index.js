import axios from 'axios'
import { server } from './config'

// 登陆
export const requestLogin = params => {
  return axios.post(server + '/jade/user/loginManage.action', params, {
    withCredentials: true, // 跨域凭证
    transformRequest: [function(data) {
      let ret = ''
      for (const it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      } // axios官方文档关于怎么用每个参数是什么说的特别特别清楚，我百度过的
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(res => {
    return Promise.resolve(res.data)
  }, err => {
    console.log(err)
  })
}