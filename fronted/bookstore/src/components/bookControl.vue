<template>
    <div class="fourOptions">
        <h4>{{msg}}</h4>
        <button><router-link to="/addbook">添加图书</router-link></button>
        <button>删除图书</button>
        <button>修改图书</button><!--在点击详情页之后修改-->
        <input v-model="key" placeholder="查询条件" value="key" v-on:@keyup.enter="submit"> 
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:'需要有一个接口获取该管理员的所有图书',
            key:''
        }
    },
    method:{
        submit(){
            let that=this;
            console.log('以及触发了submit');
            //console.log(key);
            


        }
    }
}
</script>
<style>

</style>


