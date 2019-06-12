<template>
    <div>
        <div class="loginin" >
         
        <div class="login">
            <h1 style="text-align:center;color:white"><strong>Login</strong></h1>
             <form action='' method="post" >
                        
               <div class="row">
      <div class="col-sm-12 col-md-6">
        <label for="username">Username</label>
        <input v-model="username" placeholder="Username"/>
      </div>
      <div class="col-sm-12 col-md-6">
        <label for="password">Password</label>
        <input type="password" v-model="password" placeholder="Password"/>
      </div>
    </div>
 
           <button form-type='submit' @click="submitLogin()" >登录</button>
            <button><router-link to="/register" style="text-decoration:none;">注册</router-link></button>
        </form>
        </div>
        
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
    async submitLogin() {
     
     let that=this;
      let data = await that.$dataSource.Login(
        this.username,
        this.password
      );
      console.log(data);
            
    },
    /*
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
        
    },*/
    }
    

}

</script>
<style>
.loginin{
    display: flex;
    align-items: center;
    height: 100vh;
   
    background-color:#0e4d66;
}
.login{
    height:200px;
    margin:20%;
    width:80%;
   
}
.login_item{
    height:30px;
    width:80%;
  
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

.userName{
    height:50px;
    width:80%;
   
    margin:10%;
    margin-top:50px;
    border-top:1px solid rgb(161, 156, 156);
    border-bottom:1px solid rgb(161, 156, 156);
}
</style>

