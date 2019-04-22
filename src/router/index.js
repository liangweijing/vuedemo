import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Order from '@/components/Order/Order'
import Found from '@/components/Found/Found'
import Mine from '@/components/Mine/Mine'
import NewsList from '@/components/News/NewsList'
import NewsDetail from '@/components/News/NewsDetail'
import PhotoShare from '@/components/Photo/PhotoShare'
import PhotoDetail from '@/components/Photo/PhotoDetail'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/found',
      name: 'Found',
      component: Found
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/news/list',
      name: 'NewsList',
      component: NewsList
    },
    {
      path: '/news/detail/:id',
      name: 'NewsDetail',
      component: NewsDetail
    },
    {
      path: '/photo/share',
      name: 'PhotoShare',
      component: PhotoShare
    },
    {
      path: '/photo/detail/:id',
      name: 'PhotoDetail',
      component: PhotoDetail
    }
  ]
})
