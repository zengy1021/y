import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'View',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/index.vue')
  // },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/index.vue')
  },
  {
    path: '/self',
    name: 'Self',
    component: () => import(/* webpackChunkName: "about" */ '../views/self/index.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "about" */ '../views/search/index.vue')
  },
  {
    path: '/like',
    name: 'Like',
    component: () => import(/* webpackChunkName: "about" */ '../views/like/index.vue')
  },
  {
    path: '/movieDetail/:id',
    name: 'MovieDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/movieDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
