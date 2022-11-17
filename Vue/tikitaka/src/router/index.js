import Vue from "vue"
import VueRouter from "vue-router"
import IntroView from "../views/IntroView.vue"
import HomeView from "../views/HomeView.vue"
import DetailView from "../views/DetailView.vue"
import LoginView from "../views/LoginView.vue"
import SignupView from "../views/SignupView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "intro",
    component: IntroView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/movie/:id",
    name: "detail",
    component: DetailView,
  },

  // 로그인

  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
