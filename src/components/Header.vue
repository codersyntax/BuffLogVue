<template>
   <div id="header">
     <router-link v-if="database.User.length != 0" to="/create">Create Post</router-link>&nbsp;&nbsp;&nbsp;
      <router-link v-if="database.User.length != 0" to="/contact-requests">Contact Requests</router-link>&nbsp;&nbsp;&nbsp;
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
            msg: "Log In"
         };
      },
   methods: {
      logIn() {
          if(database.User.length == 0) {
            database.User.push(new User());
            this.msg = "Sign Out";
          } else {
            database.User.pop();
            this.msg = "Log In";
          }
      }
   }
  }
</script>

<style scoped>

</style>