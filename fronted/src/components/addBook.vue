<template>

        <div class="addBooks" >
            
            
             
        <form>
            <fieldset>
                <legend>添加图书</legend>
                    <div class="col-sm">
                        <label for="Bookname">Bookname</label>
                            <input v-model="bookName" placeholder="图书名称" value="bookName"/>
                    </div>
                    <div class="col-sm">
                        <label for="Price">Price</label>
                            <input v-model="bookPrice" placeholder="图书价格" value="bookPrice"/>
                    </div>
                    <div class="col-sm">
                        <label for="BookPub">BookPub</label>
                            <input v-model="bookPub" placeholder="图书出版社" value="bookPub"/>
                    </div>
                    <div class="col-sm">
                        <label for="author">author</label>
                            <input v-model="author" placeholder="图书作者" value="author"/>
                    </div>
                    <div class="col-sm">
                        <label for="ISBN">ISBN</label>
                            <input v-model="ISBN" placeholder="图书编号" value="ISBN"/>
                    </div>
                    <div class="col-sm">
                        <label for="Content">Content</label>
                            <input v-model="content" placeholder="图书内容" value="content"/>
                    </div>
             </fieldset>
              <button form-type='submit' @click="addBook($event)" style="color:black"><strong>添加</strong></button>
            <button ><router-link to='/my' style="text-decoration:none;color:black"><strong>取消</strong></router-link></button>
        </form>
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
      author:'',
      content:''


    } 
    } ,
    mounted:{

    },
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
               author:this.author,
               content:this.content
            }
            
        })
        .then(function(response){
            console.log(response);
            console.log('添加图书的'+response.data);
            that.$router.push({path:'/admin'});
           
        })
        .catch(function(error){
           
            if(error=='Error: Request failed with status code 403')
                that.$router.push({path:'/login'});
            
        })
        
    },
    }

};

</script>
<style>
.addBooks{
    display: flex;
    justify-content: center;
    align-items: center;
    height:100vh;
    
}
.Add{
    height:500px;
   
}
label{
    height:30px;
    width:100px;
    background-color:write;
    border-radius:5px;
   text-align: left;
    padding-top:5px;
    margin-top:20px;
}
input{
   height:30px;
    width:80%;
    border:1px solid white;
    border-radius: 5PX;
    text-align: center;
    margin-top:20px;
}
.add_item{
    display:flex;
    flex-flow: row;
}
.add_control{
    display:flex;
    flex-flow: row;
    margin-top:20px;
}
p{
    flex:50%
}
</style>


