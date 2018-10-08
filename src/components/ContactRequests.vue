<template>
    <div class="contact-request-feed">
      <div v-if="database.User.length > 0">
        <a @click="$router.go(-1)">Go back</a>
          <div class="contact-request" v-for="(contactRequest, index) in database.ContactRequests" v-bind:index="index" v-bind:key="contactRequest.id">
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
  import database from "@/database.js"

  export default {

    data () {
      return {
        database: database
      }
    }
}
</script>

<style scoped>

</style>
