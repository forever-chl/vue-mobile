import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home.vue'
import index from '@/page/index/index.vue'
import list from '@/page/list/list.vue'
import find from '@/page/find/find.vue'
import my from '@/page/my/my.vue'
import detail from '@/page/detail/detail.vue'
import listen from '@/page/listen/listen.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children:[
        {
          path: '/',
          name: 'index',
          component: index
        },
        {
          path: '/index',
          name: 'index',
          component: index
        },
        {
          path: '/list',
          name: 'list',
          component: list
        },
        {
          path: '/find',
          name: 'find',
          component: find
        },
        {
          path: '/my',
          name: 'my',
          component: my
        }]
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    },
    {
      path: '/listen/:id',
      name: 'listen',
      component: listen
    }
  ]
})
