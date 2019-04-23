<template>
    <div class="fourOptions">
        <div class="top">
            <input v-model="key"  @keyup.enter="submit()"> <img src='/static/images/搜索.png'>
        </div>
            <bookTemp></bookTemp>
        <div class="footer">
            <button style="width:100%;height:50px;"><router-link to="/add"><h4>添加图书</h4></router-link></button>
        </div>
        
    </div>
</template>
<script>
import bookTemp from './books.vue'
export default {
    data(){
        return{
            msg:'需要有一个接口获取该管理员的所有图书',
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
         toBookDetail(event){
                  let that=this;
                  console.log(event);
              //console.log("这里传入的用户id是"+that.userid);
                  name:'bookDetail',
                  that.$router.push({ path:'/books/show/'+event})
              },
             
            getImageUrl(imageUrl){
              var that=this;
               //that.imageSrc='http://localhost:1337/@assets/images/'+imageUrl;
               that.imageSrc='/static/images/书.png';
               return that.imageSrc;
               console.log('获得了');
            }
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


