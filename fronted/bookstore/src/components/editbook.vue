<template>
    <div class="bookEdit">
      <div class="Edit">
                <p id="image_logo"><img v-bind:src=" book.imageUrl| changeUrl" alt=" " style="height:100px"></p>
                <form action='' method="post">
                    <p><label class="label_input">图书名称</label><input v-model="book.bookName" style="margin-top:5px;" ></p>
                    
                    <p><label class="label_input">图书价格</label><input v-model="book.bookPrice" ></p>
                    <p><label class="label_input">图书出版社</label><input v-model="book.bookPub"></p>
                    <p><label class="label_input">图书作者</label><input v-model="book.author" ></p>
                    <p><label class="label_input">图书编号</label><input v-model="book.ISBN" ></p>
                    <div id="submit_control">
                        <button form-type='submit' @click="changeBook($event)" style="margin-top:10px;"> 确定修改</button>
                        <button @click="tochangeImg()"> 修改图片</button>
                        <button style="margin-top:10px"><router-link to="/" style="text-decoration:none;color:black">取消</router-link></button>
                    </div>
                </form>
            </div>  
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            username:'',
            password:'',
            bookName:'',
            bookPrice:'',
            bookPub:'',
            ISBN:'',
            author:'',
            bookid:'',
            book:''
        }
    },
    mounted:function(){
        let that=this;
        that.bookid= that.$route.params.id;
        console.log(that.bookid);
        axios({
            method:'GET',
            url:'/api/book/'+that.bookid
        })
        .then(function(response){
            //console.log(response);
            that.book=response.data.info;
          
        })
        .catch(function(error){
            console.log(error);
        })
    },
    methods:{
        changeBook(event){
        let that=this;
       
        event.preventDefault();
        console.log(this.book.bookName);
       
        axios({
            method:'PUT',
            url:'/api/book/'+that.bookid,
            data:{
               bookName:this.book.bookName,
               bookPrice:this.book.bookPrice,
               bookPub:this.book.bookPub,
               ISBN:this.book.ISBN,
               author:this.book.author 
            }
            
        })
        .then(function(response){
            console.log(response);
            console.log('修改图书成功'+response.data);
            that.$router.push({path:'/admin'});
           
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
    
    }
   
}
</script>
<style>
.bookEdit{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

 
}
.edit{
    height:143px;
    background:no-repeat;
   
}
form p > *{
    display: inline-block;
    vertical-align: middle;
}
.label_input{
   font-size: 14px;
    font-family: 宋体;
 
    width: 65px;
    height: 28px;
    line-height: 28px;
    text-align: center;
 
    color: white;
    background-color: #3CD8FF;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    margin-top: 10px;
 
}
#submit_control {
    padding: 0 28px;
}
</style>


