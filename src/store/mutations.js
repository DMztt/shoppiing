export default {
  addCount(state, oldproduct) {
    oldproduct.count += 1
   },
   addCart(state, payload) {
     payload.checked = true
    state.cartList.push(payload)
   }
}