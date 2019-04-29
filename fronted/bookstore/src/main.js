// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'
import axios from 'axios'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router';
Vue.prototype.$http=axios
Vue.config.productionTip = false

Vue.use(VueResource)
/* eslint-disable no-new */


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
