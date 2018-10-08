<template>
    <div class="blog-feed">
        <div class="blog-post" v-for="(blogPost, index) in database.Posts" v-bind:item="blogPost" v-bind:index="index" v-bind:key="blogPost.id">
            <div v-if="blogPost.id == blogRouterId" class="content">
                <a @click="$router.go(-1)">Go back</a>
                <h2 class="blog-title">{{ blogPost.title }}</h2>
                <!-- Add routing to make edit post take user to edit component -->
                <div class="blog-info">
                <span>Created: {{ blogPost.dateCreated }} |  By: {{ blogPost.author }}</span>&nbsp;&nbsp;&nbsp;
                <span class="post-changes" v-if="database.User.length != 0">
                    <span class="edit-post"><router-link :to="'/edit:' + blogPost.id">Edit Post</router-link></span>&nbsp;&nbsp;&nbsp;
                    <span class="delete-post" v-on:click="database.Posts.splice(index, 1)">Delete Post</span>
                </span>
                </div>
                <p class="blog-body">{{ blogPost.body }}</p>
            </div>
        </div>
    </div>
</template>


<script>
  import database from "@/database.js"

  export default {

    data () {
      return {
        database: database,
        blogRouterId : this.$route.params.id.substr(1)
      }
    }
}
</script>

<style scoped>

</style>
