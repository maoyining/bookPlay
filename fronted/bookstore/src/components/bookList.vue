<template>
    <div class="bookList">
      <booksTemp></booksTemp>
      <myfooter></myfooter>
    </div>
</template>

<script>

import myfooter from './footer.vue'
import booksTemp from './books.vue'
export default {
     data () {
        return {
            msg: '欢迎来到书城',   
    }
  },
  components:{myfooter,booksTemp},
  

}
</script>
<style>
*{
  margin:0;
  padding: 0;
}



</style>


