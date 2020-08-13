import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'

import Userinfo from '../components/user/Userinfo.vue'
import Order from '../components/user/Order.vue'
import Message from '../components/user/Message.vue'

import Char from '../components/roles/Char.vue'
import Role from '../components/roles/Role.vue'

import Class from '../components/class/Class.vue'
import Venue from '../components/venue/Venue.vue'
import Data from '../components/data/Data.vue'
import Settings from '../components/settings/Settings.vue'

Vue.use(VueRouter)



export default new VueRouter({
  routes:[
    {path:'/',redirect:'/login'},
    {path:'/login',component: Login },
    {
      path:'/home', 
      component: Home,
      redirect:'/welcome',
      children:[
        {path: '/welcome', component: Welcome },
        {path: '/userinfo', compenent: Userinfo},
        {path: '/order', compenent: Order},
        {path: '/message', compenent: Message},
        {path: '/cha', component: Char},
        {path: '/role', component: Role},
        {path: '/myClass', component: Class},
        {path: '/myVenues', component: Venue},
        {path: '/Data', component: Data},
        {path: '/Settings', component: Settings}
      ]
    }
  ]
})


/*

const router = new VueRouter({
    routes:[
      {path:'/',redirect:'/login'},
      {path:'/login',component: Login },
      {path:'/home', component: Home}
    ]
  })

//挂载路由导航守卫
router.beforeEach((to,from,next)=> {
  //to：将要访问的路径
  //from：从哪个路径跳转而来
  //next：一个函数，表示放行
  // next() 放行  next('/login') 强制跳转

  if(to.path === '/login') return next();
  //先获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
})

  export default router;


  */

 const originalPush = VueRouter.prototype.push
 VueRouter.prototype.push = function push(location) {
 return originalPush.call(this, location).catch(err => err)
}