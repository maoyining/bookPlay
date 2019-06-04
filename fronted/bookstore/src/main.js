// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import myfooter from './components/footer'
import store from './store'
import axios from 'axios'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router';
import socketio from 'socket.io-client';
import VueSocketio from 'vue-socket.io';

Vue.component("myfooter",myfooter);

//import '../static/js/sails.io.js';
/*
Vue.use(
  VueSocketio,socketio('ws://118.25.136.149:2333/'));
   
 */
Vue.prototype.$http=axios
Vue.config.productionTip = false


Vue.use(VueResource)
/* eslint-disable no-new */




Vue.component('remote-script', {

  render: function (createElement) {
      var self = this;
      return createElement('script', {
          attrs: {
              type: 'text/javascript',
              src: this.src
          },
          on: {
              load: function (event) {
                  self.$emit('load', event);
              },
              error: function (event) {
                  self.$emit('error', event);
              },
              readystatechange: function (event) {
                  if (this.readyState == 'complete') {
                      self.$emit('load', event);
                  }
              }
          }
      });
  },

  props: {
      src: {
          type: String,
          required: true
      }
  }
});


Vue.filter('changeUrl',function(value){
  if(value=='')
  {
    value='/static/images/书.jpg';
    return value;
  }
  else if(value==undefined)
  {
    value='/static/images/书.jpg';
    return value;
  }
 
  else{
    value='http://localhost:1337/images/'+value;
    return value;
  }
  
})


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data(){
    return{
      imageSrc:'',
      imageUrl:''
    }
  }
})
