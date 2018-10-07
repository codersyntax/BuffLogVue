<template>
   <div id="header">
      <span v-html="createPost" id="create-post-link"></span>
      <span v-html="contactRequests" id="contact-requests-link"></span>
      <input type="button" id="log-button" v-model="msg" @click="logIn()" />
  </div>
</template>

<script>
import database from "@/database.js"
import User from "@/user.js"

   export default {
   data() {
         return {
            database : database,
            msg: "Log In",
            createPost: '',
            contactRequests: ''
         };
      },
   methods: {
      logIn() {
          if(database.User.length == 0) {
            database.User.push(new User());
            this.msg = "Sign Out";
            this.createPost = '<a href="#">Create Post</a>';
            this.contactRequests = '<a href="#">Contact Requests</a>';
          } else {
            database.User.pop();
            this.msg = "Log In";
            this.createPost = '';
            this.contactRequests = '';
          }
      }
   }
  }
</script>

<style scoped>

</style>