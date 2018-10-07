<template>
    <div class="blog-feed">
        <div class="blog-post" v-for="blogPost in database.Posts" :key="blogPost.id">
            <div class="blog-title">{{ blogPost.title }}</div>
            <!-- Add routing to make edit post take user to edit component -->
            <div class="edit-post" v-if="database.User.length != 0"><a href="#">Edit Post</a></div>
            <div class="blog-date-created">{{ blogPost.dateCreated }}</div>
            <div class="blog-author">{{ blogPost.author }}</div>
            <div class="blog-body">{{ blogPost.body.substring(0,500)+"..." }}</div>
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
