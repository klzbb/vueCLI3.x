import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter);
const routes = [
    {
        path:'/',
        name:'home',
        component:() => import('@/layout/index')
    },
    {
        path:'/login',
        name:'login',
        component:() => import('@/views/login')
    }

]
export default new VueRouter({
    mode:'hash',
    routes
})