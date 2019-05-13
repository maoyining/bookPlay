<template>
    <div class="mylike">
      
        <div >
          <div class="footer1"  >
             <div class="city1" v-for="(name,index) in booklist " :key="index" @click="toBookDetail(name.id) "> <img :src="name.imageUrl|changeUrl" alt="" style="height:100px">
                   <div > {{ name.bookName }} </div> </div>
           </div>
    </div>
    <myfooter></myfooter>
    </div>
</template>

<script>
import axios from 'axios';
import myfooter from './footer.vue'
export default {
     data () {
        return {
            msg: '欢迎来到mylike',
            booklist: [],
            
            userid:'',
            imageSrc:''
            
            
            
    }
  },
 components:{myfooter},
  mounted:function(){
    let that=this;
    that.userid=that.$store.state.userid;
   
    axios({
            method:'GET',
            url:'/api/user/like/'+that.userid,
           
        })
        .then(function(response){
            console.log(response);
           let _data=response.data.info;
            that.booklist = _data;
            
            console.log(that.booklist);
            
        })
        .catch(function(error){
            console.log(error);
            if(error='Error: Request failed with status code 403')
            that.$router.push({ path:'/login'})
        })
  },
  methods:{
  
            toBookDetail(event){
                  let that=this;
                  console.log(event);
              //console.log("这里传入的用户id是"+that.userid);
                  name:'bookDetail',
                  that.$router.push({ path:'/books/show/'+event})
              },
             
            

  }

}
</script>
<style>
*{
  margin:0;
  padding: 0;
}
.footer1{
  
  display: flex;
  flex-flow: row wrap;
  width:100%;
  padding: 10px;
  
}
.city1{

  width:33%;
  height: 150px;
  text-align: center;
}


</style>


