<template>
   <div id="header">
     <router-link v-if="database.User.length > 0" to="/create">Create Post</router-link>&nbsp;&nbsp;&nbsp;
      <router-link v-if="database.User.length > 0" to="/contact-requests">Contact Requests</router-link>&nbsp;&nbsp;&nbsp;
      <span v-if="database.User.length == 0"><input type="button" id="log-button" value="Log In" @click="signUserIn()" /></span>
      <span v-else><router-link to="/"><input type="button" id="log-button" value="Sign Out" @click="signUserOut()" /></router-link></span>
    </div>
</template>

<script>
import database from "@/database.js"
import User from "@/user.js"

   export default {
   data() {
         return {
            database : database
         };
      },
   methods: {
      signUserIn() {
        database.User.push(new User());
      },
      signUserOut() {
        database.User.pop();
      }
   }
  }
</script>

<style scoped>

</style>