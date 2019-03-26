<template>
    <div class="bookList">
      <h4>{{msg}}</h4>
        <div>
          <button type="button" @click="getBookList">获取图书信息</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
     data () {
        return {
            msg: '欢迎来到书本列表页'
    }
  },
  methods:{
  getBookList:function(){
       axios({
            method:'GET',
            url:'/api/book/getBookList',
            data:{
               
            }
        })
        
        .then(function(response){
            console.log(response);
            
        })
        .catch(function(error){
            console.log(error);
        })
  }
  }

}
</script>
<style>

</style>


