import Vue from 'vue'
import Router from 'vue-router'

//  index
import index from '@/components/index'
//  search
import search from '@/components/pages/search'
//  verification
import verifi from '@/components/pages/verification'
//  login
import login from '@/components/user/login'
//  find
import find from '@/components/user/find'
//  popups
import popups from '@/components/pages/popups'

Vue.use(Router)

let routes = [{
  path: '/',
  name: 'index',
  component: index,
  meta: {
    header: true,
    back: false,
    footer: true,
  },
},{
  path: '/pages/search',
  name: 'search',
  component: search,
  meta: {
    header: true,
    back: true,
    footer: true,
  },
},{
  path: '/pages/verification',
  name: 'verifi',
  component: verifi,
  meta: {
    header: false,
    back: true,
    footer: false,
  },
},{
  path: '/pages/popups',
  name: 'popups',
  component: popups,
  meta: {
    header: false,
    back: false,
    footer: false,
  },
},{
  path: '/user/login',
  name: 'login',
  component: login,
  meta: {
    header: false,
    back: false,
    footer: false,
  },
},{
  path: '/user/find',
  name: 'find',
  component: find,
  meta: {
    header: false,
    back: false,
    footer: false,
  },
}];

const router = new Router({
  routes,
  mode: 'hash', //default: hash ,history
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
});

// 全局路由配置
// 路由开始之前的操作
router.beforeEach((to, from, next) => {
  next();
});

export default router
