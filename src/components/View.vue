<template>
    <div class="blog-feed">
        <a @click="$router.go(-1)">Go back</a>
        <span class="blog-post" v-for="(blogPost, index) in blogPost" v-bind:item="blogPost" v-bind:index="index" v-bind:key="blogPost.id">
            <div v-if="blogPost.id == $route.params.id" class="content">
                <h2 class="blog-title">{{ blogPost.title }}</h2>
                <div class="blog-info">
                <span>Created: {{ blogPost.dateCreated }} |  By: {{ blogPost.author }}</span>&nbsp;&nbsp;&nbsp;
                <span class="post-changes" v-if="Users.length > 0">
                    <span class="edit-post"><router-link :to="'/posts/' + blogPost.id + '/edit'">Edit Post</router-link></span>&nbsp;&nbsp;&nbsp;
                    <!--<span class="delete-post" v-on:click="database.Posts.splice(index, 1)">Delete Post</span>-->
                </span>
                </div>
                <p class="blog-body">{{ blogPost.body }}</p>
                <div class="comments">
                    <h3 v-if="blogPost.comments.length > 0">Comments</h3>
                    <ul>
                        <li v-for="(blogComment, index) in blogPost.comments" v-bind:index="index" v-bind:key="blogComment.id">
                            <h4>{{ blogComment.name }} said:</h4>
                            <p style="text-indent: 2em">{{ blogComment.message }}</p>
                            <span v-if="Users.length > 0" class="comment-delete">
                                User email: {{ blogComment.email }}<br/>
                                <span v-on:click="blogPost.comments.splice(index, 1)">Delete Comment</span>
                            </span>
                        </li>
                    </ul>
                    <h3>Leave a comment?</h3>
                        <p>
                            <label for="name">Name</label>
                            <input type="text" v-model="name" id="name" name="name" placeholder="Your name..">
                            <label for="email">Email</label>
                            <input type="text" v-model="email" id="email" name="email" placeholder="Your email address..">
                        </p>
                        <p>
                            <label for="comment">Comment</label>
                            <textarea id="comment" v-model="comment" name="comment" placeholder="Write your comment..." style="height:200px"></textarea>
                        </p>
                        <p>
                            <input type="submit" value="Submit" class="view-more" id="contact-form-submit" @click="createPostComment(index)" />
                        </p>
                </div>
            </div>
        </span>
    </div>
</template>


<script>
  import UserDatabase from "@/user_database.js"
  import Axios from "../../node_modules/axios";

  export default {

    data () {
      return {
        Users: UserDatabase.Users,
        blogPost: null,
        name: '',
        email: '',
        comment: ''
      }
    },
    created() {
      Axios.get('http://localhost:3000/api/posts/', {
          params: {
              ID: this.$route.params.id
          }
      }).then(res => this.blogPost = res.data);
    },
    methods: {
        //createPostComment(index) {
        //    var lastIndex = database.Posts[index].comments[database.Posts[index].comments.length - 1].id;
        //    lastIndex++;
        //    database.Posts[index].comments.push(new PostComment(lastIndex, this.name, this.email, this.comment));
        //    this.name = '';
        //    this.email = '';
        //    this.comment = '';
        //}
    }
}
</script>

<style scoped>

</style>
