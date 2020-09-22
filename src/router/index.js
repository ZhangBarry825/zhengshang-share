import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/case',
    name: 'Case',
    component: () => import('../views/Case')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    if(routes.find((val)=>{
      return val.path == to.path
    })){
      next()
    }else {
      next('/')
    }
})

export default router
