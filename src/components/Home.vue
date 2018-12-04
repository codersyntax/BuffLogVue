<template>
    <div class="blog-feed">
        <div class="blog-post" v-for="(blogPost, index) in blogPosts" v-bind:item="blogPost" v-bind:index="index" v-bind:key="blogPost.id">
            <router-link :to="'/posts/' + blogPost.id"><h2 class="blog-title">{{ blogPost.title }}</h2></router-link>
            <!-- Add routing to make edit post take user to edit component -->
            <div class="blog-info">
              <span>Created: {{ blogPost.dateCreated }} |  By: {{ blogPost.author }}  | Comments: {{ blogPost.comments.length }}</span>&nbsp;&nbsp;&nbsp;
              <span class="post-changes" v-if="Users.length != 0">
                  <span class="edit-post"><router-link :to="'/posts/' + blogPost.id + '/edit'">Edit Post</router-link></span>&nbsp;&nbsp;&nbsp;
                  <span class="delete-post" v-on:click="deletePost(blogPost.id)">Delete Post</span>
              </span>
            </div>
            <p class="blog-body">{{ blogPost.body.substring(0,500)+"..." }}</p>
            <router-link :to="'/posts/' + blogPost.id" class="view-more">Read more...</router-link>
        </div>
    </div>
</template>


<script>
  import Axios from "../../node_modules/axios";
  import UserDatabase from "../user_database.js"

  export default {

    data () {
      return {
        blogPosts: null,
        Users: UserDatabase.Users
      }
    },
    created() {
      Axios.get('http://localhost:3000/api/posts').then(res => this.blogPosts = res.data.reverse())
    },
    updated() {
      Axios.get('http://localhost:3000/api/posts').then(res => this.blogPosts = res.data.reverse())
    },
    methods: {
      deletePost(postId) {
        Axios.delete('http://localhost:3000/api/posts/', {
          params: {
            ID: postId
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>
