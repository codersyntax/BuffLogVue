<template>
    <div class="edit-post">
        <div v-if="database.User.length > 0">
            <a @click="$router.go(-1)" class="go-back">Go back</a>
            <h2 class="title">Create New Post</h2>
            <p>
                <input type="text" v-model="title" id="title" name="title" placeholder="Post title">
            </p>
            <p>
                <input type="text" v-model="author" id="author" name="author" placeholder="Author name">
            </p>
            <p>
                <textarea v-model="body" id="post-content" name="content" placeholder="Write something.."></textarea>
            </p>
            <p>
                <router-link to="/"><input type="submit" value="Submit Post" class="edit-post-button" @click="createPost()"></router-link>
            </p>
        </div>
        <div v-else>
            <h2 class="title">Please log in to make changes</h2>
        </div>
    </div>
</template>


<script>
  import database from "@/database.js"
  import BlogPost from "@/blogPost.js"

  export default {

    data () {
      return {
        database: database,
        author: '',
        body: '',
        title: ''
      }
    },
    methods: {
        createPost() {
            var lastIndex = database.Posts[database.Posts.length - 1].id;
            lastIndex++;
            var now = new Date().toLocaleString();
            database.Posts.push(new BlogPost(lastIndex, this.title, this.author, now, this.body, []));
        }
    }
}
</script>

<style scoped>

</style>
