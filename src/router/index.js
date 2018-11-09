import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: res => require(['../views/home'],res),
      meta:{
        title: 'home'
      },
    },
    {
      path: '/login',
      name: 'login',
      component: res => require(['../views/login/login'],res),
      meta:{
        title: 'login'
      },
    },
    {
      path: '/islogin',
      name: 'islogin',
      component: res => require(['../views/login/islogin'],res),
      meta:{
        title: 'islogin'
      },
    },
    {
      path: '/register',
      name: 'register',
      component: res => require(['../views/login/register'],res),
      meta:{
        title: 'register'
      },
    },
    {
      path: '/sex',
      name: 'sex',
      component: res => require(['../views/login/sex'],res),
      meta:{
        title: 'sex'
      },
    },
    {
      path: '/databank',
      name: 'databank',
      component: res => require(['../views/databank/databank'],res),
      meta:{
        title: 'databank'
      },
    },
    {
      path: '/popup',
      name: 'popup',
      component: res => require(['../components/popup'],res),
      meta:{
        title: 'popup'
      },
    },
  ]
})
