export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      //查找数组中是否有该商品
    let oldproduct = context.state.cartList.find(item =>  payload.iid === item.iid )

    if(oldproduct) {
      // oldproduct.count += 1
      context.commit('addCount', oldproduct)
      resolve('当前商品数量加+1')
    }else {
      payload.count = 1
      // context.state.cartList.push(payload)
      context.commit('addCart',payload)
      resolve('添加了新的商品')
    }
    })
  }
}