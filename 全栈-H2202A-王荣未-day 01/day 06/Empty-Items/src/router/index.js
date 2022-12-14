import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store";
import nprogress from 'nprogress'

Vue.use(VueRouter)

const routes = [
  { path: "/login", component: () => import("@/views/login/login") },
  {
    path: '/',
    name: "LayOut",
    component: () => import("@/views/LayOut"),
    redirect: "/home",
    children: [
      {
        path: "/home", component: () => import("@/views/home")
      }
    ]
  },
  {
    path: "*",
    redirect: '/404',
  },
  {
    path: '/404', component: () => import("@/views/404/notFound")
  }
]

const router = new VueRouter({
  routes
})

const whiteList = ['/404', '/login']

router.beforeEach(async (to, from, next) => {
  nprogress.start()
  if (store.getters.token) {
    if (to.path === "/login") {
      next("/")
    } else {
      if (!store.getters.userId) {
        await store.dispatch("login/getUserSync")
      }
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach((to, from, next) => {
  nprogress.done()
})

export default router
