import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/BaiTapBuoi7/Bai1/Exercise'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bai-2',
    name: 'Bai2',
    component: () => import('../components/BaiTapBuoi7/Bai2/Exercise')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
