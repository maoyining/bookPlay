<template >
    <div class="footer">
             <div class="city" ><router-link to="/" style="text-decoration:none;color:black"><img src="/static/images/领读.png"><div >书城</div></router-link> </div>
             <div class="city" ><router-link to="/mylike" style="text-decoration:none;color:black"><img src="/static/images/书桌.png"><div> 我的收藏</div> </router-link></div>
             <div class="city" ><router-link to='/my' style="text-decoration:none;color:black"><img src="/static/images/我的鸭.png"><div > 我的</div></router-link> </div>
           </div>
</template>
<style>
.footer{
  position: fixed;
  bottom: 0;
 
  display: flex;
  flex-flow: row wrap;
  width:100%;
  border-top: 1px solid rgba(7, 17,27, 0.2);
  background-color: #f0f0f0;
  padding-top: 5px;
  height:60px;
}
.city{
 flex:0 0 33%;
 
}
</style>

