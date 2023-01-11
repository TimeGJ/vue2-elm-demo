import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  //主页
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
      component:()=>import ('../page/profile/children/info'),
      children:[{
        //重新设置名字
        path:'setusername',
        component:()=> import ('../page/profile/children/children/setusername')
      },
      {
        //编辑地址
        path:'address',
        component:()=>import ('../page/profile/children/children/address'),
        children:[{
          //添加地址
          path:'add',
          component:()=>import ('../page/profile/children/children/children/add'),
          children:[{
            //选择收货地址
            path:'addDetail',
            component:()=>import ('../page/profile/children/children/children/addDetail')
          }]
        }]
      }]
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
      //服务说明
      path:'questionDetail',
      component:()=>import  ('@/page/service/children/questionDetail')
    }]
  },
  //下载页面
  {
    path:'/download',
    name:'download',
    component:()=>import ('@/page/download/download')
  },
  //零钱页面
  {
    path:'/balance',
    name:'balance',
    component:()=> import ('@/page/balance/balance.vue'),
    children:[{
      //零钱说明
      path:'detail',
      component:()=>import ('@/page/balance/detail/detail')
    }]
  },
  //积分页面
  {
    path:'/points',
    name:'points',
    component:()=>import ('@/page/points/points'),
    children:[{
      //积分说明
      path:'detail',
      component:()=>import ('@/page/points/children/detail')
    }]
  },
  //红包页面
  {
    path:'/benefit',
    name:'benefit',
    component:()=> import ('../page/benefit/benefit'),
    children:[{
      //红包说明页面
      path:'hbDescription',
      component:()=> import ('@/page/benefit/children/hbDescription')
    },{
      //代金券说明
      path:'coupon',
      component:()=>import ('@/page/benefit/children/coupon')
    },
    //过期红包
    {
      path:'hbHistory',
      component:()=>import ('@/page/benefit/children/hbHistory')
    },
    //兑换红包
    {
      path:'exchange',
      component:()=>import ('@/page/benefit/children/exchange')
    },
    //推荐页面
    {
      path:'commend',
      component:()=>import ('@/page/benefit/children/commend')
    }]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
