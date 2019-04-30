<template>
  <div id="app">
   <button @click="sendMessage">发消息</button>
    <router-view/>
   
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      path:"ws://127.0.0.1:44799/77ca57b5-98f6-49cc-b6d6-ccd5495e7db4",
      socked:"",
      param:'aaa'
    }
  },
  mounted(){
    this.initWebSocket();
  },
  
  destroyed(){
     this.socket.onclose=this.close//断开websocket连接
  },
  methods:{
   
    initWebSocket(){
      if(typeof(WebSocket) === "undefined"){
                alert("您的浏览器不支持socket")
            }else{
                // 实例化socket
                this.socket = new WebSocket(this.path)
                // 监听socket连接
                this.socket.onopen = this.open
                // 监听socket错误信息
                this.socket.onerror = this.error
                // 监听socket消息
                this.socket.onmessage = this.getMessage
            }
    },
    open(){
      console.log("socket连接成功")
      console.log(this.socket);
    },
    error(){
      this.initWebSocket();
      console.log("socket连接失败")
    },
    getMessage:function(e){
       console.log(e);
    },
    send(){
      let that=this;
      this.socket.send(that.param);
    },
    close(){
      console.log('断开连接');
    },
    sendMessage(){
      var that=this;
      console.log("yyy");
      that.send();
    }
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
  margin-top: 60px;
}
</style>
