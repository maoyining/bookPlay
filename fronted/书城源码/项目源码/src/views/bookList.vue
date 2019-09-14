<template >
  <div class="bookList" style="margin-top:20px;">
    <booksTemp></booksTemp>
    <myfooter></myfooter>
  </div>
</template>

<script>
import booksTemp from "@/components/books.vue";
export default {
  data() {
    return {
      msg: "欢迎来到书城"
    };
  },
  components: { booksTemp }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>


