import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../components/Welcome.vue'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
