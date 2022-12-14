import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: "/", component: () => import("@/views/user/login") },
  { path: "/home", component: () => import("@/views/home") }
]

const router = new VueRouter({
  routes
})

export default router
