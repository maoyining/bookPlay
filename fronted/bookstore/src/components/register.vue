<template>
        <div class="loginin" >
            <div class="login">
                <p id="image_logo"><img src="/static/images/登录.png"></p>
                <form action='' method="post">
                    <p><label class="label_input">用户名</label><input v-model="username" placeholder="用户名" value="username"></p>
                    <p><label class="label_input">用户密码</label><input v-model="password" placeholder="请输入密码" type="password" value="password"></p>
                     <p><label class="label_input">邮箱</label><input v-model="email" placeholder="邮箱" value="email"></p>
                    <div id="login_control">
                        <button form-type='submit' @click="submitRegister($event)">注册</button>
                        <button>重置</button>
                    </div>
                </form>
            </div>
        </div>
    
</template>
<script>
import axios from 'axios';
export default {
    name:"register",
    data () {
    return {
      msg: 'Welcome to register',
      username:'',
      password:'',
      email:''
    
    } 
    } ,
    methods:{
    submitRegister(event){
        let that=this;
        event.preventDefault();
        let account=JSON.stringify(this.username);
        //console.log(account);
        let password=JSON.stringify(this.password);
        //console.log(password);
        let email=JSON.stringify(this.email);
        //console.log(email);
       axios({
            method:'POST',
            url:'/api/user',
            data:{
                username:this.username,
                password:this.password,
                email:this.email
            }
            
        })
        
        .then(function(response){
            console.log(response.data);
            that.useid=response.data.info.id;
            console.log("我是用户的id"+ that.useid);
            that.$router.push({path:'/booklist/'+ that.useid});
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


