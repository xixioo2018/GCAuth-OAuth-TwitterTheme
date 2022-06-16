import Vue from 'vue'
import VueRouter from 'vue-router'
import Regeister from "../views/RegisterView.vue"
import ChangePwd from "../views/ChangePwdView.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    component: Regeister
  },
  {
    path: '/',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginViewPlus.vue')
  },{
    path:"/changepwd",
    name:"changepwd",
    component: ChangePwd
  }
]

const router = new VueRouter({
  routes
})

export default router
