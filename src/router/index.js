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
  },
  //商铺搜索页
  {
    path:'/search',
    name:'search',
    component:()=>import('../page/search/search')
  },
  //订单页
  {
    path:'/order',
    name:'order',
    component:()=>import('../page/order/order')
  },
  //用户主页
  {
    path:'profile',
    name:'profile',
    component:()=>import('../page/profile/profile')
  },
  //食物页面
  {
    path:'food',
    name:'food',
    component:()=>import('../page/food/food')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
