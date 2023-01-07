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
  //重置密码
  {
    path:'/forget',
    name:'forget',
    component:()=>import ('../page/login/forget')
  },
  //商铺主页
  {
    path:'/msite',
    name:'msite',
    component:()=>import('../page/msite/msite'),
    meta:{
      keepalive:true
    }
  },
  //商铺搜索页
  {
    path:'/search',
    name:'search',
    component:()=>import('../page/search/search'),
    meta:{
      keepalive:true
    }
  },
  //订单页
  {
    path:'/order',
    name:'order',
    component:()=>import('../page/order/order'),
    meta:{
      keepalive:true
    }
  },
  //用户主页
  {
    path:'/profile',
    name:'profile',
    component:()=>import('../page/profile/profile'),
    meta:{
      keepalive:true
    },
    children:[{
      path:'info',//个人信息页
      component:()=>import ('../page/profile/children/info')
    }]
  },
  //食物页面
  {
    path:'/food',
    name:'food',
    component:()=>import('../page/food/food')
  },
  //会员中心
  {
    path:'/vipcard',
    name:'vipcard',
    component:()=>import ('../page/vipcard/vipcard'),
    children:[{
      //vip说明页面
      path:'vipDescription',
      component:()=>import ('../page/vipcard/children/vipDescription')
    },
    {
    //兑换会员页面
    path:'useCart',
    component:()=>import ('../page/vipcard/children/useCart')
    },
      //购买记录
    {
      path:'invoiceRecord',
      component:()=>import ('../page/vipcard/children/invoiceRecord')
    }
      ]
  },
  //服务中心
  {
    path:'/service',
    name:'service',
    component:()=>import ('@/page/service/service.vue'),
    children:[{
      path:'questionDetail',
      component:()=>import  ('@/page/service/children/questionDetail')
    }]
  },
  //下载页面
  {
    path:'/download',
    name:'download',
    component:()=>import ('@/page/download/download')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
