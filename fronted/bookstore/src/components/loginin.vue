<template>

        <div class="loginin" >
           
          <div class="login">
                <p style="text-align:center;color:black"><strong>用户登录</strong></p>
                <form action='' method="post">
                    <input v-model="username" placeholder="用户名" class="login_item">
                    <input v-model="password" placeholder="请输入密码" type="password" class="login_item">
                     <div class="login_control">
                        <p class= "control_item" form-type='submit' @click="submitLogin($event)" style="color:black"><strong>登录</strong></p>
                   
                        <p class= "control_item"><router-link to="/register" style="text-decoration:none;color:black"><strong>我要注册</strong></router-link></p>
                        <p class= "control_item"><router-link to="/" style="text-decoration:none;color:black"><strong>取消登录</strong></router-link></p>
                    </div>
                </form>
            </div>
        </div>
    
</template>
<script>
import axios from 'axios';
export default {
    name:"Login",
    data () {
    return {
     
      username:'',
      password:'',

    } 
    } ,
    methods:{
    submitLogin(event){
        let that=this;
        event.preventDefault();
        let username=JSON.stringify(this.username);
        //console.log(account);
        let password=JSON.stringify(this.password);
        console.log(that.username);
        console.log(that.password);
        axios({
            method:'POST',
            url:'api/login',
            data:{
                username:that.username,
                password:that.password
            }
            
        })
        .then(function(response){
            console.log(response.data);
            if(response.data=='fail to login')
              alert(response.data);
            //that.useid=response.data.info.id;
            //console.log("我是用户的id"+ that.useid);
            
            //console.log(that.$store.state.userid);
            that.$store.dispatch('getNewLoginin',true); //登录状态设置为true
            console.log(that.$store.state.loginin);

            if(that.$store.state.loginin){
            that.$store.dispatch('getNewAdmin',response.data.info.admin); //保存用户权限
            console.log("vuex之后的admin"+that.$store.state.admin);
            that.$store.dispatch('getNewUserid',response.data.info.id);//保存用户的id
            console.log("vuex之后"+that.$store.state.userid);
             that.$store.dispatch('getNewUserName',response.data.info.username);//保存用户的id
            console.log("vuex之后"+that.$store.state.userName);

            that.$router.push({path:'/'});
            }
        })
        .catch(function(error){
            //console.log(error);
            alert('error')
           // console.log(error.status);
        })
        
    },
    }

};

</script>
<style>
.loginin{
    display: flex;
    align-items: center;
    height: 100vh;
    background-image: url(/static/images/timg.jpg)
}
.login{
    height:200px;
    width:100%;
}
.login_item{
    height:30px;
    width:80%;
    border:1px solid white;
    border-radius: 5PX;
    text-align: center;
    margin-top:20px;
}
.login_control{
    display: flex;
    flex-flow: row;
    text-align: center;
    margin-top:20px;
}
.control_item{
    flex: 33%;
}
</style>

