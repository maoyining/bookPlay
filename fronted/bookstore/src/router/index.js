import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import loginin from '@/components/loginin.vue'
import bookList from '@/components/bookList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: loginin
    },
    {
      path:'/booklist',
      name:'bookList',
      component:bookList
    }
  ]
})
