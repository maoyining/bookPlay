<template>
    <div class="books_template">
     
        
          <div class="books"  >
             <div class="item" v-for="(name,index) in booklist " :key="index" @click="toBookDetail(name.id)" > 
                 <img v-bind:src=" name.imageUrl| changeUrl" alt=" " style="height:100px">
                   <div > {{ name.bookName }} </div> </div>
           </div>
   
    </div>
</template>
<script>
import axios from 'axios';



export default {
     data () {
        return {
            msg: '欢迎来到书城',
            booklist: [],
            
            userid:'',
            
            
    }
  },
  
  mounted:function(){
    let that=this;
    axios({
            method:'GET',
            url:'/api/books',
           
        })
        .then(function(response){
            console.log(response);
            let _data=response.data;
            that.booklist = _data;
            
            console.log(that.booklist);
            
            
        })
        .catch(function(error){
            console.log(error);
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
.books{
  
  display: flex;
  flex-flow: row wrap;
  width:100%;
  padding: 10px;
  
}
.item{

  width:33%;
  height: 150px;
  text-align: center;
}
</style>
