<template>

        <div class="loginin" >
            
            <div class="login">
                <p id="image_logo"><img src="/static/images/书.png"></p>
                <form action='' method="post">
                    <p><label class="label_input">图书名称</label><input v-model="bookName" placeholder="图书名称" value="bookName"></p>
                    
                    <p><label class="label_input">图书价格</label><input v-model="bookPrice" placeholder="图书价格" value="bookPrice"></p>
                    <p><label class="label_input">图书出版社</label><input v-model="bookPub" placeholder="图书出版社" value="bookPub"></p>
                    <p><label class="label_input">图书作者</label><input v-model="author" placeholder="图书作者" value="author"></p>
                    <p><label class="label_input">图书编号</label><input v-model="ISBN" placeholder="图书编号" value="ISBN"></p>
                    <div id="login_control">
                        <button form-type='submit' @click="addBook($event)">添加</button>
                        <button><router-link to="/register">注册</router-link></button>
                       
                    </div>
                </form>
            </div>
        </div>
    
</template>
<script>
import axios from 'axios';
export default {
    name:"addBook",
    data () {
    return {
      msg: 'Welcome to addBook',
      username:'',
      password:'',
      bookName:'',
      bookPrice:'',
      bookPub:'',
      ISBN:'',
      author:''


    } 
    } ,
    methods:{
    addBook(event){
        let that=this;
       
        event.preventDefault();
        let bookName=JSON.stringify(this.bookName);
        console.log(bookName);
        //let password=JSON.stringify(this.password);
        //console.log(password);
        axios({
            method:'POST',
            url:'/api/book',
            data:{
               bookName:this.bookName,
               bookPrice:this.bookPrice,
               bookPub:this.bookPub,
               ISBN:this.ISBN,
               author:this.author 
            }
            
        })
        .then(function(response){
            console.log(response);
            console.log('添加图书的'+response.data);
           
        })
        .catch(function(error){
            console.log(error);
            alert('error')
        })
        
    },
    }

};

</script>
<style>
.loginin{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

 
}
.login{
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
 
}
#login_control {
    padding: 0 28px;
}

</style>


