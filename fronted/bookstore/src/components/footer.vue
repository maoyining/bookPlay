<template >
    <div class="footer">
             <div class="city" ><router-link to="/"><img src="/static/images/书城.png"><div > 书城</div></router-link> </div>
             <div class="city" ><router-link to="/mylike"><img src="/static/images/用户收藏.png"><div> 我的收藏</div> </router-link></div>
             <div class="city" ><router-link to='/my'><img src="/static/images/我的.png"><div > 我的</div></router-link> </div>
           </div>
</template>
<style>
.footer{
  position: fixed;
  bottom: 0;
 
  display: flex;
  flex-flow: row wrap;
  width:100%;
}
.city{
 flex:0 0 33%;
 
}
</style>

