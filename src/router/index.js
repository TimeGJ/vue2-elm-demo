import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('../page/home/home.vue') 
  },
  //city页面
  {
    path: '/city',
    name: 'city',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ()=>import ('../page/city/city')
  },
  //登录页面
  {
    path:'/login',
    name:'login',
    component:()=>import ('../page/login/login')
  },
  //商铺主页
  {
    path:'/msite',
    name:'msite',
    component:()=>import('../page/msite/msite')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
