
import Toast from './Toast.vue'
const obj = {

}
obj.install = function (Vue) {
  console.log('执行了这个函数')
  //1 创建组件构造器 并传入组件对象
  const toastConstructor = Vue.extend(Toast)

  //2 通过new方式 根据组件构造器，创建出新的组件对象
  const toast = new toastConstructor()

  //3 将组件对象手动挂载在某一元素上 
  toast.$mount(document.createElement('div'))

  //4 toast.$el对应是div
  document.body.appendChild(toast.$el)

  //把这个插件挂载到Vue原型上
  Vue.prototype.$toast = toast
}
export default obj