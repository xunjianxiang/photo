'use strict'

import VueRouter from 'vue-router'
import Wall from './Wall'

const routes = [
  {
    path: '/',
    redirect: '/wall'
  },
  {
    name: 'wall',
    path: '/wall/:path?',
    component: Wall
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
