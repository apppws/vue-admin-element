import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{
          name:'首页',
          ayth:false
      },
      component: home,
      children:[
          {
              path:'/setting',
              name:'setting',
              meta:{
                  name:'基本设备',
                  auth:false,
                  icon:'' ,// 存放图标
              }
          }
      ]
    }
  ]
})
