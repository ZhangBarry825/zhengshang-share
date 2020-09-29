import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

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

    {
        path: '/mobile',
        name: 'Mobile',
        component: () => import('../views/mobile/MobileHome')
    },
    {
        path: '/mobile/case',
        name: 'MobileCase',
        component: () => import('../views/mobile/MobileCase')
    },
    {
        path: '/mobile/news',
        name: 'MobileNews',
        component: () => import('../views/mobile/MobileNews')
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    store.commit('setLoading', true);

    const isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    const hasMobile=to.fullPath.indexOf('/mobile')
    if(isMobile){
        localStorage.setItem('device','mobile')
    }else {
        localStorage.setItem('device','pc')
    }

    //console.log(hasMobile)
    //console.log(to.fullPath)
    if(hasMobile!=-1 && !isMobile){
        let newPah = to.fullPath.replace(new RegExp("/mobile","g"),"");
        next(newPah)
    }else if(hasMobile==-1 && isMobile){
        next('/mobile' + to.fullPath)
    }else if(hasMobile!=-1 && isMobile){
        next()
    }else if(hasMobile==-1 && !isMobile){
        next()
    }


    // if (routes.find((val) => {
    //     return val.path == to.path
    // })) {
    //     next()
    // } else {
    //     next('/')
    // }

})

router.afterEach((to, from) => {
    setTimeout(function () {
        store.commit('setLoading', false);
    }, 1200);
});

export default router
