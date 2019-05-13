<template>
    <div class="bookList">
      <booksTemp></booksTemp>
      <myfooter></myfooter>
      
    </div>
</template>

<script>

import myfooter from './footer.vue'
import booksTemp from './books.vue'
export default {
     data () {
        return {
            msg: '欢迎来到书城',  
            info:{
              id:123,
              name:'张三'
            } 
    }
  },

  components:{myfooter,booksTemp},
  sockets:{
    USER_INFO(data){
      this.info=data
    }
  },
  methods:{
    send(){
      console.log('发送');
    }
  }
  

}
</script>
<style>
*{
  margin:0;
  padding: 0;
}



</style>


