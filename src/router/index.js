import Vue from 'vue'
import VueRouter from 'vue-router'
import Pagination from '../views/Pagination.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Pagination
  }
]

const router = new VueRouter({
  routes
})

export default router
