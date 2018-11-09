// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import axios from 'axios'
import 'lib-flexible/flexible'
import router from './router/index'
import store from './store/index'
import { Group } from 'vux'
import { AlertPlugin, ToastPlugin, ConfirmPlugin, WechatPlugin } from 'vux'
import gunBack from './components/gunBack.vue'
import popup from './components/popup.vue'
Vue.use(VueRouter)
Vue.component('group', Group)
Vue.component('gunBack',gunBack)
Vue.component('popup',popup)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(WechatPlugin)
Vue.prototype.$axios = axios
// const routes = [{
//   path: '/',
//   component: Home
// }]

// const router = new VueRouter({
//   routes
// })

FastClick.attach(document.body) //解决移动端点击反应慢300ms

Vue.config.productionTip = false //去掉生产提示

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    console.log(this.$axios)
  }
}).$mount('#app-box')
