<template>
    <div class="edit-post">
        <a @click="$router.go(-1)" class="go-back">Go back</a>
        <div v-if="database.User.length > 0">
            <div class="blog-post" v-for="(blogPost, index) in database.Posts" v-bind:item="blogPost" v-bind:index="index" v-bind:key="blogPost.id">
                <div v-if="blogPost.id == blogRouterId" class="content">
                    <h2 class="title">Edit {{ blogPost.title }}</h2>
                    <p>
                        <input type="text" v-model="blogPost.title" id="title" name="title" placeholder="Post title">
                    </p>
                    <p>
                        <input type="text" v-model="blogPost.author" id="author" name="author" placeholder="Author name">
                    </p>
                    <p>
                        <textarea v-model="blogPost.body" id="post-content" name="content" placeholder="Write something.."></textarea>
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
