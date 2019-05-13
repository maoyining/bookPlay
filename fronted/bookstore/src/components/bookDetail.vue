<template>
    <div class="bookDetail">
      
    <div class="container">
      <!--<img :src="getImageUrl(name.imageUrl)" alt="">-->
      <div class="book">
      <img v-bind:src=" book.imageUrl| changeUrl" alt="" style="height:150px"></div>
      <div class="book">
          <div class="items"> <h3 >{{book.bookName}} </h3></div>
          <div class="items"> <p >{{book.author}} </p></div>
          <div class="items"> <p >{{num}}人收藏 </p></div>

       </div>

   </div>
     <div class="footerdetail" v-if="!admin">
             <div class="city" ><router-link to='/'><img src="/static/images/书城.png"><div > 书城</div> </router-link></div>
             <div class="city"  v-if="!collect" @click="like()"><img src="/static/images/收藏.png" ><div> 加入书桌</div> </div>
             <div class="city"  v-if="collect" @click="unlike()"><img src="/static/images/收藏-1.png" ><div> 移除书桌</div> </div>
             <div class="city" ><router-link to='/my'><img src="/static/images/我的.png"> <div>我的</div> </router-link></div>
           </div>
    <div class="footerdetail" v-if="admin">
             <div class="city1" @click="tochange()"><img src="/static/images/修改.png"><div > 修改图书</div> </div>
             <div class="city1" @click="tochangeImg()"><img src="/static/images/修改.png"><div > 修改图书图片</div> </div>
             <div class="city1"  @click="deleteBook()"><img src="/static/images/删除.png" ><div> 删除图书</div> </div>
             <div class="city1" ><router-link to='/my'><img src="/static/images/我的.png"> <div>我的</div> </router-link></div>
           </div>
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
            num:'',
            imageUrl:'',
            imageSrc:''
    }
  },
  mounted:function(){
    let that=this;

    that.bookid= that.$route.params.id;
    that.admin=that.$store.state.admin;
    console.log("我是book的id"+that.bookid);
    that.admin=that.$store.state.admin;
    that.userid=that.$store.state.userid;
   
    axios({
            method:'GET',
            url:'/api/book/'+ that.bookid,
            data:{ }
        })
        
        .then(function(response){
            console.log(response.data.info);
            
            
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
            //alert(response.data.info)
            if(response.data.info==false)
             {
                 that.collect=false;
                 
             }
             else if(response.data.info==true)
             {
                 that.collect=true;
                 
             }
            //console.log(response.status);

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
            console.log(response.data.num);
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
            console.log(response.data.info);
            console.log(JSON.stringify(response.data.info));
           if(JSON.stringify(response.data.info))
            {
                alert("收藏成功");
                that.collect=true;
            }
            console.log("收藏状态"+that.collect);

        })
        .catch(function(error){
            console.log(error);
            //alert('error')
        })     
    },
    unlike(){
          let that=this;
          if(that.loginstatus==1)
           that.$router.push({path:'/login'});
          console.log("取消收藏前的验证bookid"+that.bookid+"用户id"+ that.userid) 
          axios({
            method:'POST',
            url:'/api/unlike',
            data:{
                userId:that.userid,
                bookId:that.bookid
            }
        })
        .then(function(response){
            console.log(response.data);
            alert("取消收藏成功");
            that.collect=false;
            
        })
        .catch(function(error){
            console.log(error);
           // alert('error')
        })     
        
    },
    deleteBook(){
          let that=this;
          console.log(that.book.bookName+that.book.ISBN);
          
          axios({
            method:'DELETE',
            url:'/api/book',
            data:{
                bookName:that.book.bookName,
                ISBN:that.book.ISBN
            }
        })
        .then(function(response){
            console.log(response.data);
            alert("删除图书成功");
            that.$router.push({path:'/my'});
           
            
        })
        .catch(function(error){
            console.log(error);
            alert('error')
        })     
        
    },
    tochangeImg(){
         var that=this;
         console.log(that.bookid);
         that.$router.push({ path:'/edit/image/'+that.bookid})
    },

    tochange(){
        var that=this;
        console.log(that.bookid);
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
   height: 40px;
    text-align: left;
    margin-top: 10px;
}
.footerdetail{
  position: fixed;
  bottom: 0;
 
  display: flex;
  flex-flow: row wrap;
  width:100%;
}
.city{
 flex:0 0 33%;

}
.city1{
    flex:0 0 25%;
}

</style>


