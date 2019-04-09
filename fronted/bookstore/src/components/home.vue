<template>
    <div class="bookList">
      <h4>{{msg}}</h4>
        <div>
          <button type="button" @click="getBookList">图书排名</button>
        </div>
       <div>
         <ol>
            <li v-for = "(item,index) in BookID " :key="index">
                <button type="button" @click="toBookDetail(index)">{{item.bookName}}  </button>
            </li>
        </ol>
       </div>
    </div>
</template>

<script>


var that=this;
export default {
  
     data () {
        return {
            msg: '欢迎来到书城，此页将会显示一些广告以及一些收藏图书的排名并提供搜索功能',
            BookID:[]
    }
  },


  methods:{
  getBookList:function(){
    console.log(this.$store.state.changableNum);
       this.$http({
            method:'GET',
            url:'/api/book/getBookList',
            data:{ 
            }
        })
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        })
  },
  toBookDetail:function(e){
    console.log(e);
    console.log()

  },
  },

  

}
</script>
<style>

</style>


