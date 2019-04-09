<template>
    <div class="bookDetail">
      <h4>{{msg}}</h4>
      <p>书籍名称：{{book.bookName}} <img src="/static/images/收藏.png" @click="like()"></p>
      <p>书籍价格：{{book.bookPrice}}</p>
      <p>作者：{{book.author}}</p>
      <button type="button" @click="unlike()">取消收藏该图书</button>
      <button type="button" @click="deleteBook()">删除该图书</button>
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
            ISBN:'' 
    }
  },
  mounted:function(){
    let that=this;
    console.log("我是跳转就触发了的");
    that.bookid= that.$route.params.id;
    that.userid=that.$route.query.userid;
    console.log("我是book的id"+that.bookid);

    console.log("我想获取用户的id"+that.userid);
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

   
  },
  methods:{
      like(){
          let that=this;
          console.log("收藏前的验证bookid"+that.bookid+"用户id"+ that.userid) 
          axios({
            method:'POST',
            url:'/api/like',
            data:{
                userId:that.userid,
                bookId:that.bookid
            }
        })
        .then(function(response){
            console.log(response.data);
           
            that.useid=response.data.info.id;
            //console.log("我是用户的id"+ that.useid);
            
        })
        .catch(function(error){
            console.log(error);
            alert('error')
        })     
    },
    unlike(){
          let that=this;
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
            that.useid=response.data.info.id;
            console.log("我是用户的id"+ that.useid);
            
        })
        .catch(function(error){
            console.log(error);
            alert('error')
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
        
    }

  }

}
</script>
<style>

</style>


