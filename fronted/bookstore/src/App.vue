<template>
  <div id="app">
   
    <router-view/>
  
  </div>
</template>

<script >



export default {
  name: 'App',
  data(){
    return {
      
      socket:"",
      param:'aaa'
    }
  },
  

  
  mounted(){ 
   // this.initWebSocket();
   
var that=this;

  var io = require('sails.io.js')( require('socket.io-client') );

  io.sails.url = 'http://localhost:1337';
  //监听
  io.socket.get('/message/hello')
  //监听事件，若有人收藏或者有人取消收藏，则会触发该事件
   
  io.socket.on('message', function (data) {
   console.log('图书ID：');
   console.log(data.id);
   console.log("当今收藏人数：")
    console.log(data.greeting);
    that.$store.dispatch('getNewBookid',data.id); //保存图书id
    that.$store.dispatch('getNewNum',data.greeting); //保存图书收藏人数
    console.log('socketbookid'+that.$store.state.bookid);
  });
 
   
  },
  
  destroyed(){
     //this.socket.onclose=this.close//断开websocket连接
  },
  
  methods:{
   
  //   initWebSocket(){
  //     if(typeof(WebSocket) === "undefined"){
  //               alert("您的浏览器不支持socket")
  //           }else{
  //               // 实例化socket
  //               this.socket = new WebSocket('ws://localhost:1337')
  //               // 监听socket连接
  //               this.socket.onopen = this.open
  //               // 监听socket错误信息
  //               this.socket.onerror = this.error
  //               // 监听socket消息
  //               this.socket.onmessage = this.getMessage
  //           }
  //   },
  //   open(){
  //     console.log("socket连接成功")
  //     console.log(this.socket);
  //   },
  //   error(){
  //     this.initWebSocket();
  //     console.log("socket连接失败")
  //   },
  //   getMessage:function(e){
  //      console.log(e);
  //   },
  //   send(){
  //     let that=this;
  //     this.socket.send(that.param);
  //     console.log('发送成功');
  //   },
  //   close(){
  //     console.log('断开连接');
  //   },
    
   },
  
  
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
