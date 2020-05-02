import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

//注册插件
Vue.use(Vuex)

//安装插件

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations,
  actions,
  getters
})


export default store