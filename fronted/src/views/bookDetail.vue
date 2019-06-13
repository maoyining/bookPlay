<template>
    <div class="bookDetail">
        <div class="container">
            <div class="book">
                <img v-bind:src=" book.imageUrl| changeUrl" alt="" style="height:150px">
            </div>
            <div class="book">
                <div class="items"> <h3 >{{book.bookName}} </h3></div>
                <div class="items"> <p >{{book.author}} </p></div>
                <div class="items" v-if="this.$store.state.bookid!=this.bookid " > <p >{{num}}人收藏 </p></div>
                <div class="items" v-if="this.$store.state.bookid==this.bookid"> <p >{{this.$store.state.num}}人收藏 </p></div>
                <div class="items"><p>{{book.bookPub}}</p></div>
            </div>
            <div >
                <h3 style="border-bottom:1px solid rgba(7, 17,27, 0.1);padding-left:20px;width:100%; margin-top:10px;text-align:left">简介</h3>
                <p>{{book.content}}</p>
            </div>
        </div>
        
        <div class="footerdetail" v-if="!admin">
            
             <div class="city"  v-if="!collect" @click="like()"><img src="/static/images/收藏.png" ><div> 加入书桌</div> </div>
             <div class="city"  v-if="collect" @click="unlike()"><img src="/static/images/收藏-1.png" ><div> 移除书桌</div> </div>
             
        </div>
        <div  class="footerdetail" v-if="admin">
            <div class="city"  v-if="!collect" @click="like()"><img src="/static/images/收藏.png" ><div> 加入书桌</div> </div>
             <div class="city"  v-if="collect" @click="unlike()"><img src="/static/images/收藏-1.png" ><div> 移除书桌</div> </div>
             <div class="city" @click="tochange()"><img src="/static/images/修改鸭.png"><div > 修改图书</div> </div>
             <div class="city"  @click="deleteBook()"><img src="/static/images/删除鸭.png" ><div> 删除图书</div> </div>
            
        </div>
       <myfooter></myfooter>
    </div>
     
</template>

<script>
import axios from 'axios';

export default {
     data () {
        return {
            msg: '欢迎来到书本详情页',
            bookid:'',
            book:'',
            userid:'' ,
            bookName:'',
            ISBN:'' ,
            admin:false,
            collect:false,
            loginstatus:'',
            num:this.$store.state.num,
            imageUrl:'',
            imageSrc:'',
            content:''
    }
  },
  watch:{
     'this.$store.state.num':function(val){
         if(this.$store.state.bookid==this.bookid){
             this.num=val
         }
     }
  },
  mounted:function(){
    let that=this;
    that.bookid= that.$route.params.id;
    that.admin=that.$store.state.admin;
    that.admin=that.$store.state.admin;
    that.userid=that.$store.state.userid;
    that.num=that.$store.state.num;
    axios({
            method:'GET',
            url:'/api/book/'+ that.bookid,
            data:{ }
        })
        .then(function(response){
           that.book=response.data.info;    
        })
        .catch(function(error){
            console.log(error);
        })
    axios({
         method:'GET',
            url:'/api/book/'+ that.bookid+'/user/'+that.userid,       
    })
     .then(function(response){
            console.log(response.data.info);
            if(response.data.info==false)
             {
                 that.collect=false;   
             }
             else if(response.data.info==true)
             {
                 that.collect=true;
             }
        })
        .catch(function(error){
            if(error='Error: Request failed with status code 403'){     
                that.loginstatus=1;
            }    
        })
    axios({
            method:'GET',
            url:'/api/book/like/'+ that.bookid,
        })
        .then(function(response){
            that.num=response.data.num;  
        })
        .catch(function(error){
            console.log(error);
        }) 
  },
  methods:{
       like(){
          let that=this;
          if(that.loginstatus==1)
           that.$router.push({path:'/login'});
          axios({
            method:'POST',
            url:'/api/like',
            data:{
                userId:that.userid,
                bookId:that.bookid
            }
        })
        .then(function(response){
           if(JSON.stringify(response.data.info))
            {
                alert("收藏成功");
                that.collect=true;
            }
        })
        .catch(function(error){
            console.log(error);
        })     
    },
    unlike(){
          let that=this;
          if(that.loginstatus==1)
           that.$router.push({path:'/login'});          
          axios({
            method:'POST',
            url:'/api/unlike',
            data:{
                userId:that.userid,
                bookId:that.bookid
            }
        })
        .then(function(response){          
            alert("取消收藏成功");
            that.collect=false;           
        })
        .catch(function(error){
               alert('error')
        })     
        
    },
    deleteBook(){
          let that=this;
          axios({
            method:'DELETE',
            url:'/api/book',
            data:{
                bookName:that.book.bookName,
                ISBN:that.book.ISBN
            }
        })
        .then(function(response){
            alert("删除图书成功");
            that.$router.push({path:'/my'});    
        })
        .catch(function(error){        
            alert('error')
        })          
    },
    tochange(){
        var that=this;
        that.$router.push({ path:'/edit/'+that.bookid})
    }
  }

}
</script>
<style>
.container{
    display:flex;
    flex-flow: row wrap;
    width:100%;
    
}
.book{
    flex:0 0 50%;
}
.items{
   flex:0 0 25% ;  
   text-align: left;  
   height:40px;
}
.footerdetail{

  display: flex;
  flex-flow: row wrap;
  width:100%;
  border-top: 1px solid rgba(7, 17,27, 0.2);
  background-color: #f0f0f0;
  padding-top: 5px;
  height:60px;
}
.city{

 flex:0 0 33%;

}

</style>


