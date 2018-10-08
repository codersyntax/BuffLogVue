<template>
    <div class="blog-feed">
        <div class="blog-post" v-for="(blogPost, index) in database.Posts" v-bind:item="blogPost" v-bind:index="index" v-bind:key="blogPost.id">
            <div v-if="blogPost.id == blogRouterId" class="content">
            Add edit section for {{ blogPost.title }} here
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
