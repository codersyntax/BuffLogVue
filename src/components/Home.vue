<template>
    <div class="blog-feed">
        <div class="blog-post" v-for="(blogPost, index) in database.Posts" v-bind:item="blogPost" v-bind:index="index" v-bind:key="blogPost.id">
            <div class="blog-title">{{ blogPost.title }}</div>
            <!-- Add routing to make edit post take user to edit component -->
            <div class="post-changes" v-if="database.User.length != 0">
                <span class="edit-post"><router-link to="/edit">Edit Post</router-link></span>
                <span class="delete-post" v-on:click="database.Posts.splice(index, 1)">Delete Post</span>
            </div>
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
