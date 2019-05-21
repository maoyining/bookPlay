<template>
    <div class="bookList">
      <booksTemp></booksTemp>
     <!-- <myfooter></myfooter>-->
   <!-- <footer class="sticky">
             <div class="city" ><router-link to="/" style="text-decoration:none;color:black"><img src="/static/images/领读.png"><div >书城</div></router-link> </div>
             <div class="city" ><router-link to="/mylike" style="text-decoration:none;color:black"><img src="/static/images/书桌.png"><div> 我的收藏</div> </router-link></div>
             <div class="city" ><router-link to='/my' style="text-decoration:none;color:black"><img src="/static/images/我的鸭.png"><div > 我的</div></router-link> </div>
    </footer>-->

          <mt-tabbar >
              <mt-tab-item id="书城"> 
                  <router-link to="/" style="text-decoration:none;color:black"><img src="/static/images/领读.png"><div >书城</div></router-link> 
              </mt-tab-item>
        
          <mt-tab-item id="我的收藏">
               <router-link to="/mylike" style="text-decoration:none;color:black"><img src="/static/images/书桌.png"><div> 我的收藏</div> </router-link>
          </mt-tab-item>
          <mt-tab-item id="我的">
              <router-link to='/my' style="text-decoration:none;color:black"><img src="/static/images/我的鸭.png"><div > 我的</div></router-link> 

          </mt-tab-item>
      </mt-tabbar>
      
    </div>
</template>

<script>

import myfooter from './footer.vue'
import booksTemp from './books.vue'
export default {
     data () {
        return {
            msg: '欢迎来到书城',  
            info:{
              id:123,
              name:'张三'
            } 
    }
  },

  components:{myfooter,booksTemp},
  sockets:{
    USER_INFO(data){
      this.info=data
    }
  },
  methods:{
    send(){
      console.log('发送');
    }
  }
  

}
</script>
<style>
*{
  margin:0;
  padding: 0;
}
.sticky{
  display:flex;
  position: fixed;
  bottom: 0;
  width:100%;
  border-top: 1px solid rgba(7, 17,27, 0.2);
  background-color: #f0f0f0;
  padding-top: 5px;
  height:60px;
}
.city{
 
  flex:33%
}

</style>


