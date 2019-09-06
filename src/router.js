import Vue from 'vue'
import Router from 'vue-router'
// 首页
import Shopping from 'home/Shopping'
// 分类
import  List from 'home/List'
// 热搜
import Shop from 'home/Shop'
// 购物车
import Cart from 'home/Cart'
// 我的
import Proflie from 'home/Proflie'
// 登录
import Login from 'home/Login'
// 注册
import Register from 'home/Register' 
// 商品详情页
import Details from 'home/Details'
// 疯抢
import Berserk from 'home/Berserk'
// 欢迎页
import Splash from '../src/views/splash/Splash.vue'
import Home from 'home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    // 欢迎页
    {
      path:'/',
      component:Splash
    },
    {
      path:'/home',
      component:Home,
      redirect:'/home/shopping',
      children:[
        // 首页
        {
          path: 'shopping',
          name: 'shopping',
          component: Shopping,
          meta: {
            keepAlive: true
          }      
        },
        // 分类
        {
          path: 'list',
          name: 'lsit',
          component: List,
        },
        // 热搜
        {
          path:'shop',
          name:'shop',
          component:Shop
        },
        // 购物车
        {
          path:'cart',
          name:'cart',
          component:Cart
        },
        // 互动吧
        {
          path:'proflie',
          name:'proflie',
          component:Proflie
        },
        // 登录
        {
          path:'login',
          name:'login',
          component:Login
        },
        // 注册
        {
          path:'register',
          name:'register',
          component:Register
        },
        {
          path:'details?:goodId',
          name:'details',
          component:Details
        },
        // 疯抢
        {
          path:'berserk',
          name:'berserk',
          component:Berserk
        }
      ]

    }
  ]
})
 
// 首页



// {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }