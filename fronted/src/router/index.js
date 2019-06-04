import Vue from 'vue'
import Router from 'vue-router'

import loginin from '@/components/loginin.vue'
import bookList from '@/components/bookList.vue'

import register from '@/components/register.vue'
import bookDetail from '@/components/bookDetail.vue'
import addBook from '@/components/addBook.vue'
import footer from '@/components/footer.vue' 
import mylike from '@/components/mylike.vue'
import my from '@/components/my.vue'
import adminuser from '@/components/bookControl.vue'
import editbook from '@/components/editbook.vue'
import editImg from '@/components/editImg.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: loginin
    },
    {
      path:'/books/:id',
      name:'booklist',
      component:bookList
    },
    {
      path:'/',
      name:'books',
      component:bookList,
      footer
    },
    {
      path:'/register',
      name:'register',
      component:register
    },
    {
      path:'/books/show/:id',
      name:'bookDetail',
      component:bookDetail
    },
    {
      path:'/add',
      name:'addBook',
      component:addBook

    },
    {
      path:'/mylike',
      name:'mylike',
      component:mylike
    },
    {
      path:'/my',
      name:'my',
      component:my
    },
    {
      path:'/admin',
      name:'admin',
      component:adminuser
    },
    {
      path:'/edit/:id',
      name:'edit',
      component:editbook
    },
    {
      path:'/edit/image/:id',
      name:'editImg',
      component:editImg
    }
    
    
  ]
})
