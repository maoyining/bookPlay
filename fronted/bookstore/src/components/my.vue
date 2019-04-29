<template>
  <div class="container">
    <div class="my">
       
        <h4 v-if="loginin" class="items">{{userName}}</h4>
        <h4 v-if="!loginin" class="items"><router-link to='/login'>登录</router-link></h4>
        <p class="items" ><router-link to='/mylike'>我收藏的图书</router-link></p>


        <p class="items">我的回答</p>
        <p class="items">我的消息</p>
        <p  v-if="admin" class="items"><router-link to='/admin'>我所有的图书</router-link></p>
    </div>
    <div class="logout" @click="logout1()">
     <button v-if="loginin" style="height:50px;width:100%">退出登录</button>
    </div>
    </div>
</template>
<script>
import axios from 'axios';
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
    },
    methods:{
        logout1(){
            let that=this;
            console.log(that.$store.state.userid);
            
            
            
            axios({
                 method:'POST',
                 url:'api/logout',
                 data:{
                    userId:that.$store.state.userid,
                    }
            })
            .then(function(response){
                console.log(response);
                if(response.data.info==true)
                {
                    that.$store.dispatch('getNewLoginin',false); //登录状态取消
                    console.log(that.$store.state.loginin);
                    that.loginin=false;
                   // that.$store.dispatch('getNewAdmin',false); //状态取消
                    
                   // that.$store.dispatch('getNewUserid',100);//保存用户的id
                    
                   // that.$store.dispatch('getNewUserName',yyy);//保存用户的id
                    
                    that.$router.push({path:'/my'});
            } 
            })
            .catch(function(error){
                console.log(error);

            })
           
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
.items{
   height: 40px;
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
