<template>
   <div id="header">
      <span v-html="createPost" id="create-post-link"></span>
      <span v-html="contactRequests" id="contact-requests-link"></span>
      <input type="button" v-model="msg" @click="clicking()" />
  </div>
</template>

<script>
   export default {
   data() {
         return {
            msg: "Log In",
            createPost: '',
            contactRequests: ''
         };
      },
   methods: {
      clicking() {
          if(this.msg == "Log In") {
            this.msg = "Sign Out";
            this.createPost = '<a href="#">Create Post</a>';
            this.contactRequests = '<a href="#">Contact Requests</a>';
          } else {
            this.msg = "Log In";
            this.createPost = '';
            this.contactRequests = '';
          }
      }
   }
  }
</script>

<style scoped>
#header {
    position:absolute;
    width: 100%;
    height: 100px;
    background-color:coral;
    top: 0;
    left: 0;
    padding: 20px;
}
</style>