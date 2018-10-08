<template>
   <div id="footer">
       <h2>Contact</h2>
            <p>
                <label for="name">Name</label>
                <input type="text" v-model="name" id="name" name="name" placeholder="Your name..">
                <label for="email">Email</label>
                <input type="text" v-model="email" id="email" name="email" placeholder="Your email address..">
            </p>
            <p>
                <label for="message">Message</label>
                <textarea id="message" v-model="message" name="message" placeholder="Write something.." style="height:200px"></textarea>
            </p>
            <p>
                <input type="submit" value="Submit" class="view-more" id="contact-form-submit" @click="createContactRequest()" />
            </p>
  </div>
</template>

<script>
import database from "@/database.js"
import ContactRequest from "@/contactRequest.js"

   export default {
   data() {
        return {
            database : database,
            name: '',
            email: '',
            message: ''
        };
    },
    methods: {
        createContactRequest() {
            database.ContactRequests.push(new ContactRequest(this.name, this.email, this.message));
            this.name = '';
            this.email = '';
            this.message = '';
        }
    }
  }
</script>

<style scoped>

</style>