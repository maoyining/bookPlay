import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import loginin from '@/components/loginin.vue'
import bookList from '@/components/bookList.vue'
import home from '@/components/home.vue'
import register from '@/components/register.vue'

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
      name:'booklist',
      component:bookList
    },
    {
      path:'/',
      name:'home',
      component:home
    },
    {
      path:'/register',
      name:'register',
      component:register
    }
    
  ]
})
