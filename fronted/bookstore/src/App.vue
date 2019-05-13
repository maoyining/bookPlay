<template>
  <div id="app">
   
    <router-view/>
   
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      path:"ws://118.25.136.149:2333",
      socket:"",
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
                this.socket = new WebSocket('ws://118.25.136.149:2333')
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
      console.log('发送成功');
    },
    close(){
      console.log('断开连接');
    },
    
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
