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
        }
    },
    mounted:function(){
        let that=this;
        that.bookid= that.$route.params.id;
    },
    methods:{
        selectImg(e){
            let that=this;
            //console.log(e);
            let imgFile = e.target.files[0];//取到上传的图片
            console.log(imgFile);
            let formData=new FormData();//通过formdata上传
            formData.append('file',imgFile);
           // console.log("看看这里传过去的"+formData.get('file'));
           let config={
               headers:{"Content-Type": "multipart/form-data"},
                onUploadProgress:e=>{
                    var completeProgress=((e.loaded/e.total*100)|0)+"%";
                    this.progress=completeProgress;
                }
           }
           const instance=axios.create({
               withCredentials:true
           })
            instance({
                method: 'POST',
                url:'/api/book/'+that.bookid+'/img', 
                data:{
                    avatar:formData,
                },
                
                
            })
           .then(function (res) {
            console.log(res.data);
            }).catch(function(error){
            console.log(error);
            })
            
        }
        
    }

           
}
</script>
<style>

</style>


