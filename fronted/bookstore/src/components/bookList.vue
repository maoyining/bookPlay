<template>
    <div class="bookList">
      <h4>{{msg}}</h4>
        <div>
          <button type="button" @click="getBookList">获取图书信息</button>
           <button v-for="(item,index) in booklist " :key="index" @click="toBookDetail(item.id) "> {{ item.bookName }} </button>
           <button type="button" @click="getMyLike">我的收藏</button>
           <button v-for="(item,index) in favariteBook " :key="index" @click="toBookDetail(item.id) "> {{ item.bookName }} </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
     data () {
        return {
            msg: '欢迎来到书本列表页',
            booklist: [],
            userid:'',
            favariteBook:[]
    }
  },
  mounted:function(){
    let that=this;
    that.userid=that.$route.params && that.$route.params.id;
    console.log("我是用户的id"+that.userid);
  },
  methods:{
  getBookList:function(){
    let that=this;
       axios({
            method:'GET',
            url:'/api/books',
            data:{ }
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
  toBookDetail(event){
    let that=this;
    console.log(event);
    //console.log("这里传入的用户id是"+that.userid);
      name:'bookDetail',
    that.$router.push({ path:'/booklist/bookDetail/'+event, query: { bookid:event,userid:that.userid}})
  },
  getMyLike:function(){
    let that=this;
   console.log("查询我的收藏之前确定用户id"+that.userid);
   axios({
            method:'GET',
            url:'/api/user/like/'+that.userid,
            
        })
        .then(function(response){
          console.log(response.data.info.book);
          let _data=response.data.info.book;
            that.favariteBook = _data;
            console.log(that.favariteBook);
          console.log("收藏图书的返回" + that.favariteBook[0]);
            
            
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


