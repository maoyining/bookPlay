<template>
    <div class="fourOptions">
        <div class="top">
            <input  class="search" v-model="key"  @keyup.enter="submit()"> <img src='/static/images/搜索.png'>
        </div>
            <bookTemp></bookTemp>
        <div class="footer">
            <button style="width:100%;height:50px;"><router-link to="/add" style="text-decoration:none;color:black"><h4>添加图书</h4></router-link></button>
        </div>
        
    </div>
</template>
<script>
import bookTemp from './books.vue'
export default {
    data(){
        return{
           
            key:'',
            admin:false
        }
    },
    components:{bookTemp},
    method:{
        submit(){
            let that=this;
            console.log('以及触发了submit');
            //console.log(key);
        
        },
          
    }
}
</script>
<style>
.footer{
  position: fixed;
  bottom: 0;
 
  display: flex;
  flex-flow: row wrap;
  width:100%;
}
</style>


