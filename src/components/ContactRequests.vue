<template>
    <div class="contact-request-feed">
      <div v-if="database.User.length > 0">
        <a @click="$router.go(-1)">Go back</a>
          <div class="contact-request" v-for="(contactRequest, index) in ContactRequests" v-bind:index="index" v-bind:key="contactRequest.id">
            <h4>Name: {{ contactRequest.name }}  | Email: {{ contactRequest.email }}</h4>
            <p>Sent: {{ contactRequest.dateCreated }}</p>
              <span v-if="database.User.length > 0" class="contact-request-delete">
                <span v-on:click="database.ContactRequests.splice(index, 1)">Delete Message</span>
              </span>
            <blockquote>{{ contactRequest.message }}</blockquote>
          </div>
      </div>
      <div v-else>
        <h2 class="title">Please log in to make changes</h2>
      </div>
    </div>
</template>


<script>
  import UserDatabase from "@/user_database.js"
  import Axios from "../../node_modules/axios";

  export default {

    data () {
      return {
        Users: UserDatabase.Users,
        ContactRequests: null
        //database: database
      }
    },
    created() {
      Axios.get('http://localhost:3000/api/contact-requests').then(res => this.ContactRequests = res.data)
    }
}
</script>

<style scoped>

</style>
