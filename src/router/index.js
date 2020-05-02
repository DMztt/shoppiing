import Vue from 'vue'
import VueRouter from 'vue-router'

<<<<<<< HEAD
=======

>>>>>>> f103f9bb3c216d8d88b4dd545be747e3e0e73a0c
const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')
<<<<<<< HEAD
const Detail = () => import('../views/detail/Detail.vue')

Vue.use(VueRouter)



=======

Vue.use(VueRouter)
>>>>>>> f103f9bb3c216d8d88b4dd545be747e3e0e73a0c
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
<<<<<<< HEAD
  {
    path: '/detail/:iid',
    component: Detail
  },
  // {
  //   path: '/detail',
  //   component: Detail
  // }
=======
>>>>>>> f103f9bb3c216d8d88b4dd545be747e3e0e73a0c
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router