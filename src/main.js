import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

//导入toast插件
import toast from 'components/common/toast'
//安装toast插件
Vue.use(toast)

Vue.config.productionTip = false


//使用懒加载插件
Vue.use(VueLazyload, {
  loading: require('./assets/img/common/loading.gif')
})

//添加事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store,
=======
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
>>>>>>> f103f9bb3c216d8d88b4dd545be747e3e0e73a0c
}).$mount('#app')
