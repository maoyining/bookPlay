<template >
    <div class="bookList" style="margin-top:20px;">
      <booksTemp></booksTemp>
      <myfooter></myfooter>
   

    </div>
</template>

<script>

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

  components:{booksTemp},
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
/*
.sticky{
  display:flex;
  position: fixed;
  bottom: 0;
  width:100%;
  border-top: 1px solid rgba(7, 17,27, 0.2);
  background-color: #f0f0f0;
  padding-top: 5px;
  height:60px;
}
.city{
 
  flex:33%
}
*/

</style>


