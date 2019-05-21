<template>
  <div id="app">
   
    <router-view/>
  
  </div>
</template>

<script >
import myfooter from '@/components/footer.vue'


export default {
  name: 'App',
  data(){
    return {
      
      socket:"",
      param:'aaa'
    }
  },
  
components:{myfooter},
  
  mounted(){ 
   // this.initWebSocket();
   
var that=this;

  var io = require('sails.io.js')( require('socket.io-client') );

  io.sails.url = 'http://localhost:1337';
  //监听
  io.socket.get('/message/hello')
  //监听事件，若有人收藏或者有人取消收藏，则会触发该事件
   
  io.socket.on('message', function (data) {
   
    that.$store.dispatch('getNewBookid',data.id); //保存图书id
    that.$store.dispatch('getNewNum',data.greeting); //保存图书收藏人数
    
  });
 
   
  },
  
  destroyed(){
     //this.socket.onclose=this.close//断开websocket连接
  },
  
  methods:{
   
  
    
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
