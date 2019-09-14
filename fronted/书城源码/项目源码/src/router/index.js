import Vue from 'vue'
import Router from 'vue-router'








import mylike from '../views/mylike.vue'


import editbook from '../views/editbook.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () =>import('../views/Login.vue')
    },
    {
      path:'/books/:id',
      name:'booklist',
      component:() =>import('../views/bookList.vue')
    },
    {
      path:'/',
      name:'books',
      component:() =>import('../views/bookList.vue')
     
    },
    {
      path:'/register',
      name:'register',
      component:() =>import('../views/Register.vue')
    },
    {
      path:'/books/show/:id',
      name:'bookDetail',
      component:() =>import('../views/bookDetail.vue')
    },
    {
      path:'/add',
      name:'addBook',
      component:() =>import('../views/addBook.vue')

    },
    {
      path:'/mylike',
      name:'mylike',
      component:mylike
    },
    {
      path:'/my',
      name:'my',
      component:() =>import('../views/my.vue')
    },
    {
      path:'/admin',
      name:'admin',
      component:() =>import('../views/bookControl.vue')
    },
    {
      path:'/edit/:id',
      name:'edit',
      component:editbook
    },
   
    
  ]
})
