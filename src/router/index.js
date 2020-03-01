import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from 'axios'
import Exercises from '../components/Exercises.vue'

Vue.use(VueRouter)

function createRouter (state) {
  async function beforeEnter (to, from, next) {
    try {
      const { data: user } = await axios.get('/api/v1/me')
      state.user = user
      next()
    } catch (err) {
      console.log('err', err)
      next('login')
    }
  }
  const routes = [
    {
      path: '/exercises',
      name: 'Exercises',
      component: Exercises
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
  return new VueRouter({
    routes
  })
}

export default createRouter
