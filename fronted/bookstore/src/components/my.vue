<template>
  <div class="container">
    <div class="my">
       
        <h4 v-if="loginin" class="item">{{userName}}</h4>
        <h4 v-if="!loginin" class="item"><router-link to='/login'>登录</router-link></h4>
        <p class="item"><router-link to='/admin'>我的收藏图书</router-link></p>
        <p class="item">我的回答</p>
        <p class="item">我的消息</p>
        <p  v-if="admin" class="item"><router-link to='/admin'>我所有的图书</router-link></p>
    </div>
    <div class="logout">
     <button v-if="loginin" style="height:50px;width:100%">退出登录</button>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:'welcome to my',
            userName:'',
            loginin:'',
            admin:''
        }
    },
    mounted:function(){
        let that=this;
        console.log(that.$store.state.loginin);
        if(that.$store.state.loginin==true){
            that.loginin=true;
         that.userName=that.$store.state.userName;
         that.admin=that.$store.state.admin;
        }
    }
}
</script>

<style>
.my{
  display: flex;
  flex-flow: column;
  width:100%;
}
.item{
   
    text-align: left;
    
}
.logout{
  position: fixed;
  bottom: 0;

  display: flex;
  justify-content: center;
  width:100%;
  
}
</style>
