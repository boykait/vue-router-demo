import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home'
import About from '../components/About'
import Login from '../components/Login'
import Index from '../components/Index'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/index',
          component: Index
        },
        {
          path: '/about',
          component: About
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  debugger
  if ((localStorage.getItem('token') && localStorage.getItem('token') !== '401') || to.path === '/') {
    next()
  } else {
    next({path: '/'})
  }
})

export default router
