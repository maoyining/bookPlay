<template>
        <div class="loginin" >
           <!--
                <form action='' method="post">
                    <p font="36px">注册</p>
                    <div>用户名<input v-model="username" placeholder="用户名" value="username" class="input"></div>
                    <div>密码<input v-model="password" placeholder="请输入密码" type="password" value="password" class="input"></div>
                     <div>邮箱<input v-model="email" placeholder="邮箱" value="email" class="input"></div>
                    <div id="login_control">
                        <button form-type='submit' @click="submitRegister($event)">注册</button>
                        <button><router-link to="/" style="text-decoration:none;color:black"> 取消</router-link></button>
                    </div>
                </form>-->
            <form action="" method="post">
            <fieldset>
                <legend>注册</legend>
                
                    <div class="col-sm">
                        <label for="username">Username</label>
                            <input type="text" v-model="username" placeholder="用户名" value="username"/>
                    </div>
                    
                    <div class="col-sm">
                        <label for="birthdaty">password</label>
                            <input v-model="password" placeholder="请输入密码" type="password" value="password"/>
                    </div>
                    <div class="col-sm">
                        <label for="address">email</label>
                            <input v-model="email" placeholder="邮箱" value="email"/>
                    </div>
               
             </fieldset>
              <button form-type='submit' @click="submitRegister($event)">注册</button>
            <button><router-link to="/" style="text-decoration:none;color:black"> 取消</router-link></button>
        </form>
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
        console.log(account);
        let password=JSON.stringify(this.password);
        console.log(password);
        let email=JSON.stringify(this.email);
        console.log(email);
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
            that.useid=response.data.userId;
            console.log("我是用户的id"+ that.useid);
            that.$router.push({path:'/'});
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


