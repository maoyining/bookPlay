<template>
    <div class="bookDetail">
      <h4>{{msg}}</h4>
    <div class="container">
      <!--<img :src="getImageUrl(name.imageUrl)" alt="">-->
      <div class="book">
      <img  src="/static/images/书.png" alt="" style="height:150px"></div>
      <div class="book">
          <div class="item"> <h3 >{{book.bookName}} </h3></div>
          <div class="item"> <p >{{book.author}} </p></div>
          <div class="item"> <p >{{num}}人收藏 </p></div>

       </div>

   </div>
     <div class="footerdetail">
             <div class="city" ><router-link to='/'><img src="/static/images/书城.png"><div > 书城</div> </router-link></div>
             <div class="city"  v-if="!collect" @click="like()"><img src="/static/images/收藏.png" ><div> 加入书桌</div> </div>
             <div class="city"  v-if="collect" @click="unlike()"><img src="/static/images/收藏-1.png" ><div> 移除书桌</div> </div>
             <div class="city" ><router-link to='/mylike'><img src="/static/images/我的.png"> <div>我的</div> </router-link></div>
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
            admin:'',
            collect:false,
            loginstatus:'',
            num:''
    }
  },
  mounted:function(){
    let that=this;

    that.bookid= that.$route.params.id;

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
            
            //console.log("我是response" + response);
           let _data=response.data.info;
            that.book = _data;
            
          // console.log("我是保存下来的信息"+that.book);
            
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
                 //alert('错了');
             }
             else if(response.data.info==true)
             {
                 that.collect=true;
                 //alert('ture');
             }
            //console.log(response.status);

        })
        .catch(function(error){
           
            //alert(error);
            //console.log(error.code);
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
           
            
        })
        .catch(function(error){
            console.log(error);
            alert('error')
        })     
        
    },
     getImageUrl(imageUrl){
              var that=this;
               //that.imageSrc='http://localhost:1337/assets/images/'+imageUrl;
               that.imageSrc='/static/images/书.png';
               return that.imageSrc;
               console.log('获得了');
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
.item{
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

</style>


