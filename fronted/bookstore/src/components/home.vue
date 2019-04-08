<template>
    <div class="bookList">
      <h4>{{msg}}</h4>
        <div>
          <button type="button" @click="getBookList">图书排名</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
     data () {
        return {
            msg: '欢迎来到书城，此页将会显示一些广告以及一些收藏图书的排名并提供搜索功能'
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


