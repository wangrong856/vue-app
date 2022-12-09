import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: () => import("@/views/login") },
  { path: '/register', component: () => import("@/views/register") },
  { path: '/MainPage', component: () => import("@/views/MainPage") },
  { path: '*', redirect: '/notFound' },
  { path: '/notFound', component: () => import("@/views/404/notFound") }
]

const router = new VueRouter({
  routes
})

export default router
