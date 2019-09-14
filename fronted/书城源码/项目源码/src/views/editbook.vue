<template>
  <div>
    <div class="editBooks">
      <form action method="post">
        <div class="col-sm">
          <img v-bind:src=" book.imageUrl| changeUrl" alt=" " style="height:100px">
        </div>
        <div class="col-sm">
          <label for="bookName">图书名称</label>
          <input v-model="book.bookName">
        </div>
        <div class="col-sm">
          <label for="bookPrice">图书价格</label>
          <input v-model="book.bookPrice">
        </div>
        <div class="col-sm">
          <label for="bookPub">图书出版社</label>
          <input v-model="book.bookPub">
        </div>
        <div class="col-sm">
          <label for="author">图书作者</label>
          <input v-model="book.author">
        </div>
        <div class="col-sm">
          <label for="ISBN">图书编号</label>
          <input v-model="book.ISBN">
        </div>
        <div class="edit_control">
          <p form-type="submit" @click="changeBook($event)" style="color:black">
            <strong>确定修改</strong>
          </p>
          <p @click="tochangeImg()">
            <strong>修改图书图片</strong>
          </p>
          <p>
            <router-link to="/my" style="text-decoration:none;color:black">取消</router-link>
          </p>
        </div>
        <div v-if="imgChangeStatus">
          <form
            name="imgForm"
            id="imgForm"
            enctype="multipart/form-data"
            action="图片上传接口"
            method="post"
          >
            <input
              class="input-loc-img"
              name="imgLocal"
              id="imgLocal"
              type="file"
              accept="image/*"
              @change="selectImg"
            >
          </form>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      bookName: "",
      bookPrice: "",
      bookPub: "",
      ISBN: "",
      author: "",
      bookid: "",
      book: "",
      imgChangeStatus: 0,
      imgFile: ""
    };
  },
  mounted: function() {
    let that = this;
    that.bookid = that.$route.params.id;
    console.log(that.bookid);
    axios({
      method: "GET",
      url: "/api/book/" + that.bookid
    })
      .then(function(response) {
        //console.log(response);
        that.book = response.data.info;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    changeBook(event) {
      let that = this;

      event.preventDefault();
      console.log(this.book.bookName);

      axios({
        method: "PUT",
        url: "/api/book/" + that.bookid,
        data: {
          bookName: this.book.bookName,
          bookPrice: this.book.bookPrice,
          bookPub: this.book.bookPub,
          ISBN: this.book.ISBN,
          author: this.book.author
        }
      })
        .then(function(response) {
          console.log(response);
          console.log("修改图书成功" + response.data);
          that.$router.push({ path: "/admin" });
        })
        .catch(function(error) {
          console.log(error);
          alert("error");
        });
    },
    tochangeImg() {
      var that = this;
      console.log(that.bookid);
      //that.$router.push({ path:'/edit/image/'+that.bookid})
      that.imgChangeStatus = 1;
    },
    selectImg(e) {
      e.preventDefault();
      let that = this;

      let imgFile = e.target.files[0]; //取到上传的图片
      let formData = new FormData(); //通过formdata上传
      formData.append("avatar", imgFile);
      axios({
        method: "POST",
        url: "/api/book/" + that.bookid + "/img",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
        .then(function(res) {
          console.log(res.data);
          if (res.data == "Created") {
            that.$router.push({ path: "/" });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style>
.editBooks {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.edit_control {
  display: flex;
  flex-flow: row;
  margin-top: 20px;
}
p {
  flex: 50%;
}
</style>