import vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter)

const routes = [
    {
        path: "/", component: () => import("@/views/children/login/login")
    },
    {
        path:"/MainPage",component:()=>import("@/views/children/MainPage/MainPage")
    },
    {
        path:"*",
        redirect:"/notFound"
    },
    {
        path:'/notFound',component: ()=> import("@/views/notFound")
    },
]

const router = new VueRouter({
    routes
})
export default router

