<template>
    <div>
        <form name="imgForm" id="imgForm" enctype="multipart/form-data" action="图片上传接口" method='post'>
            <input class="input-loc-img"  name="imgLocal" id="imgLocal" type='file' accept="image/*" @change="selectImg" />
        </form> 
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            bookid:'',
            imgFile:''
        }
    },
    mounted:function(){
        let that=this;
        that.bookid= that.$route.params.id;
    },
    methods:{
        selectImg(e){
            e.preventDefault();
            let that=this;
            
            let imgFile = e.target.files[0];//取到上传的图片
            let formData=new FormData();//通过formdata上传
            formData.append('avatar',imgFile);
            axios({
                method: 'POST',
                url:'/api/book/'+that.bookid+'/img', 
                data:formData,
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            
            })
           .then(function (res) {
            console.log(res.data);
            if(res.data=="Created"){
                that.$router.push({path:'/'});
            }
            }).catch(function(error){
            console.log(error);
            })
            
        }
        
    }

           
}
</script>
<style>

</style>


