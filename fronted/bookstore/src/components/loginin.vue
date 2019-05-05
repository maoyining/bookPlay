<template>

        <div class="loginin" >
            
            <div class="login">
                <p id="image_logo"><img src="/static/images/登录.png"></p>
                <form action='' method="post">
                    <p><label class="label_input"  >用户名</label><input v-model="username" placeholder="用户名" ></p>
                    <p style="margin-top:10px"><label class="label_input" >用户密码</label><input v-model="password" placeholder="请输入密码" type="password"></p>
                    <div id="login_control">
                        <button form-type='submit' @click="submitLogin($event)">登录</button>
                        <button><router-link to="/register">注册</router-link></button>
                        <button>忘记密码</button>
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
      msg: 'Welcome to loginin',
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
    border-radius: 5px;
 
}
#login_control {
    padding-top: 10px;
}

</style>


