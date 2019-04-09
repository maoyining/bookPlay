import Vue from 'vue'
import Router from 'vue-router'

import loginin from '@/components/loginin.vue'
import bookList from '@/components/bookList.vue'
import home from '@/components/home.vue'
import register from '@/components/register.vue'
import bookDetail from '@/components/bookDetail.vue'
import addBook from '@/components/addBook.vue' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: loginin
    },
    {
      path:'/booklist/:id',
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
    },
    {
      path:'/booklist/bookDetail/:id',
      name:'bookDetail',
      component:bookDetail
    },
    {
      path:'/addbook',
      name:'addBook',
      component:addBook

    }
    
  ]
})
