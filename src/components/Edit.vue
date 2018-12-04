<template>
    <div class="edit-post">
        <a @click="$router.go(-1)" class="go-back">Go back</a>
        <div v-if="Users.length > 0">
            <div class="blog-post" v-for="(blogPost, index) in blogPost" v-bind:item="blogPost" v-bind:index="index" v-bind:key="blogPost.id">
                <div v-if="blogPost.id == $route.params.id" class="content">
                    <h2 class="title">Edit {{ blogPost.title }}</h2>
                    <p>
                        <input type="text" v-model="blogPost.title" id="title" name="title" placeholder="Post title">
                    </p>
                    <p>
                        <input type="text" v-model="blogPost.author" id="author" name="author" placeholder="Author name">
                    </p>
                    <p>
                        <textarea v-model="blogPost.body" id="post-content" name="content" placeholder="Write something.." style="height:200px"></textarea>
                    </p>
                    <p>
                        <router-link to="/"><input type="submit" value="Submit Changes" class="edit-post-button"></router-link>
                    </p>
                </div>
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
        blogPost: null
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
        submitPostChanges() {
            Axios.put('http://localhost:3000/api/posts/' + this.$route.params.id, this.blogPost).then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(err);
            });
        }
    }
}
</script>

<style scoped>

</style>
