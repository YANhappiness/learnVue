import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import News from '@/components/News'
import AboutFun from '@/components/AboutFun'
import AboutSport from '@/components/AboutSport'
import Errors from '@/components/Error'
import VuexTest from '@/components/VuexTest'

import Goods from '@/components/Goods'

Vue.use(Router)

export default new Router({
   mode: 'history',
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/news',
    component: News,
    children: [{
        path: '/',
        name: 'News',
        component: News
      },
      {
        path: 'AboutFun',
        name: 'AboutFun',
        component: AboutFun
      },
      {
        path: 'AboutSport',
        name: 'AboutSport',
        component: AboutSport
      },
    ]
  }, {
    path: "*",
    name: "Error",
    component: Errors
  }, {
    path: "/count",
    name: "VuexTest",
    component: VuexTest
  },{
    path:"/goods",
    name:"Goods",
    component:Goods
  }]
})
