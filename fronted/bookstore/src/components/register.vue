<template>
        <div class="loginin" >
            <div class="login">
                <p id="image_logo"><img src="/static/images/登录.png"></p>
                <form action='' method="post">
                    <div><div class="label_input">用户名</div><input v-model="username" placeholder="用户名" value="username" class="input"></div>
                    <div><div class="label_input">用户密码</div><input v-model="password" placeholder="请输入密码" type="password" value="password" class="input"></div>
                     <div><div class="label_input">邮箱</div><input v-model="email" placeholder="邮箱" value="email" class="input"></div>
                    <div id="login_control">
                        <button form-type='submit' @click="submitRegister($event)">注册</button>
                        <button><router-link to="/" style="text-decoration:none;color:black"> 取消</router-link></button>
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
            that.$router.push({path:'/books/'+ that.useid});
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
form div > *{
    display: inline-block;
    vertical-align: middle;
}
form input > *{
   
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
.input{
    margin-top: 6px;
}
#login_control {
    padding: 0 28px;
}

</style>


