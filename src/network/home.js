<<<<<<< HEAD
import {requset, request} from './request'


export function getHomeMultiDate() {
  return request({
    url: '/home/multidata'
  })
}

=======
import {request} from './request'

//首页有多个请求  把多个请求放到一个页面上 做一个统一管理
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'

  })
}
>>>>>>> f103f9bb3c216d8d88b4dd545be747e3e0e73a0c
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}