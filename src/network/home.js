import {request} from './request'

//首页有多个请求  把多个请求放到一个页面上 做一个统一管理
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'

  })
}
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}