'use strict'

import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'
import './index.scss'
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'

Vue.use(VueRouter)
Vue.use(ElementUI)

new Vue({
  el: 'app',
  router,
  render: h => h(App)
})
