import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
<<<<<<< HEAD
    baseURL: 'http://123.32.52.237:8000/api/h8',//接口暂不提供
    
    timeout: 5000
  })

=======
    baseURL: 'http://123.207.32.32:8000/api/hh',
    //baseURL: 'http://106.54.54.237:8000/api/v1, 新街口加老师微信
    timeout: 5000
  })
>>>>>>> f103f9bb3c216d8d88b4dd545be747e3e0e73a0c
  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })
<<<<<<< HEAD

=======
>>>>>>> f103f9bb3c216d8d88b4dd545be747e3e0e73a0c
  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
<<<<<<< HEAD

=======
>>>>>>> f103f9bb3c216d8d88b4dd545be747e3e0e73a0c
  // 3.发送真正的网络请求
  return instance(config)
}
