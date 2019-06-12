<template>
  
    <div class="my">
      <!--  <p style="text-align:right" @click="changeInformation()">编辑</p>-->
        <div class="user">
            <h2 v-if="loginin" class="userName" @click="logout1">{{userName}}</h2>
            <h2 v-if="!loginin" class="userName"><router-link to='/login' style="text-decoration:none;color:black">登录</router-link></h2>
            
        </div>
       
        
        <div class="message" v-if="admin">
            <div class="message_item" style="height:16px;padding-left:10px;"><img src="/static/images/添加.png"></div>
            <div class="message_item"><router-link to='/add' style="text-decoration:none;color:black"><h4>添加图书</h4></router-link></div>
           
        </div>
        <form>
            <fieldset>
                <legend>个人信息</legend>
                
                    <div class="col-sm">
                        <label for="username">User</label>
                            <input type="text" id="Username" placeholder="Username"/>
                    </div>
                    <div class="col-sm">
                        <label for="sex">性别</label>
                            <input type="text" id="sex" placeholder="sex"/>
                    </div>
                    <div class="col-sm">
                        <label for="birthdaty">生日</label>
                            <input type="text" id="birthday" placeholder="birthday"/>
                    </div>
                    
               
             </fieldset>
        </form>
            <myfooter></myfooter>
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
            admin:'',
           
            books:'5'

        }
    },
    components:{myfooter},
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
                if(response.data.info==true)
                {
                    that.$store.dispatch('getNewLoginin',false); //登录状态取消
                    console.log(that.$store.state.loginin);
                    that.loginin=false;
                    that.$router.push({path:'/my'});
            } 
            })
            .catch(function(error){
                console.log(error);

            })
           
        },
        contact(){
            alert("QQ:1418264042");
        }
    }
}
</script>

<style>
.my{
  display: flex;
  flex-flow: column;
  
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
.user{
    display: flex;
    flex-flow: row;
    
    margin-top: 10px;
   
}
.userImg{
    display: flex;
    margin-left: 40%;
}
.userName{
    display: flex;
    flex:0 0 50%;
    margin-left: 20px; 
}
.state{
    margin-top: 10px;
     border-bottom: 1px solid rgba(7, 17,27, 0.1);
     padding-bottom: 10px;
}
.message{
    display: flex;
    flex-flow: row;
   
    height:50px;
    align-items: center
}
.message_item{
    display:flex;
    align-items: center;
    padding-left: 10px;
}

</style>
