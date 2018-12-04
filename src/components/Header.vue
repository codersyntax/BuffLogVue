<template>
   <div id="header">
     <router-link v-if="Users.length > 0" to="/posts/create">Create Post</router-link>&nbsp;&nbsp;&nbsp;
      <router-link v-if="Users.length > 0" to="/contact-requests">Contact Requests</router-link>&nbsp;&nbsp;&nbsp;
      <span v-if="Users.length == 0"><input type="button" id="log-button" value="Log In" @click="signUserIn()" /></span>
      <span v-else><router-link to="/"><input type="button" id="log-button" value="Sign Out" @click="signUserOut()" /></router-link></span>
    </div>
</template>

<script>
import UserDatabase from "@/user_database.js"
import User from "@/user.js"

   export default {
   data() {
         return {
           Users: UserDatabase.Users
            //database : database
         };
      },
   methods: {
      signUserIn() {
        UserDatabase.Users.push(new User());
      },
      signUserOut() {
        UserDatabase.Users.pop();
      }
   }
  }
</script>

<style scoped>

</style>