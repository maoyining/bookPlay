<template>
  <div class="container">
    <div class="my">
        <p style="text-align:right">编辑</p>
        <div class="user">
            <h2 v-if="loginin" class="userName" @click="logout1">{{userName}}</h2>
            <h2 v-if="!loginin" class="userName"><router-link to='/login'>登录</router-link></h2>
            <div class="userImg"><img src="/static/images/用户头像-01.png"></div>
        </div>
        <div class="state">
            <p> {{books}} </p>
            <p>境界：{{boundar}}</p>
        </div>
        <div class="message">
            <div class="message_item" style="height:16px;padding-left:10px;"><img src="/static/images/消息.png"></div>
            <div class="message_item"><h4>消息</h4></div>
            <div class="message_item" style="margin-left:300px">></div>
        </div>
        <div class="message">
            <div class="message_item" style="height:16px;padding-left:10px;"><img src="/static/images/团队.png"></div>
            <div class="message_item"><h4>我的阅读图书</h4></div>
            <div class="message_item" style="margin-left:235px">></div>
        </div>
        <div class="message">
            <div class="message_item" style="height:16px;padding-left:10px;"><img src="/static/images/消息.png"></div>
            <div class="message_item"><h4>我的书评</h4></div>
            <div class="message_item" style="margin-left:265px">></div>
        </div>
        <div class="message" style="border-bottom: 1px solid rgba(7, 17,27, 0.1);">
            <div class="message_item" style="height:16px;padding-left:10px;"><img src="/static/images/疑问.png"></div>
            <div class="message_item"><h4>我的问答</h4></div>
            <div class="message_item" style="margin-left:265px">></div>
        </div>
        <div class="message" >
            <div class="message_item" style="height:16px;padding-left:10px;"><img src="/static/images/会员.png"></div>
            <div class="message_item"><h4>开通会员</h4></div>
            <div class="message_item" style="margin-left:260px">></div>
        </div>
        <div class="message" >
            <div class="message_item" style="height:16px;padding-left:10px;"><img src="/static/images/订单.png"></div>
            <div class="message_item"><h4>我的订单</h4></div>
            <div class="message_item" style="margin-left:260px">></div>
        </div>
        <div class="message" style="border-bottom: 1px solid rgba(7, 17,27, 0.1);">
            <div class="message_item" style="height:16px;padding-left:10px;"><img src="/static/images/购物车.png"></div>
            <div class="message_item"><h4>我的购物车</h4></div>
            <div class="message_item" style="margin-left:245px">></div>
        </div>
        <div class="message" >
            <div class="message_item" style="height:16px;padding-left:10px;"><img src="/static/images/邀请.png"></div>
            <div class="message_item"><h4>邀请好友</h4></div>
            <div class="message_item" style="margin-left:260px">></div>
        </div>
        <div class="message" style="border-bottom: 1px solid rgba(7, 17,27, 0.1);">
            <div class="message_item" style="height:16px;padding-left:10px;"><img src="/static/images/卡券.png"></div>
            <div class="message_item"><h4>我的卡券</h4></div>
            <div class="message_item" style="margin-left:260px">></div>
        </div>
         <div class="message" >
            <div class="message_item" style="height:16px;padding-left:10px;"><img src="/static/images/客服.png"></div>
            <div class="message_item"><h4>在线客服</h4></div>
            <div class="message_item" style="margin-left:195px">意见反馈></div>
        </div>
        <div class="message" style="border-bottom: 1px solid rgba(7, 17,27, 0.1);">
            <div class="message_item" style="height:16px;padding-left:10px;"><img src="/static/images/设置.png"></div>
            <div class="message_item"><h4>设置</h4></div>
            <div class="message_item" style="margin-left:290px">></div>
        </div>
        
        
    </div>
    <!--注销功能放到编辑里面
            <div class="logout" @click="logout1()">
            <button v-if="loginin" style="height:50px;width:100%">退出登录</button>
            </div>
    -->
    <myfooter></myfooter>
    </div>
</template>
<script>
import myfooter from './footer.vue'
import axios from 'axios';
export default {
    data(){
        return{
            msg:'welcome to my',
            userName:'',
            loginin:'',
            admin:'',
            user:[
                {imgUrl:'../static/images/用户头像-01.png',books:'5'}
                ],
            boundar:'衣带渐宽',
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
.user{
    display: flex;
    flex-flow: row;
    border-bottom: 1px solid rgba(7, 17,27, 0.2);
    margin-top: 10px;
}
.userImg{
    display: flex;
    margin-left: 40%;
}
.userName{
    display: flex;
    flex:0 0 50%;
    justify-content: left; 
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
