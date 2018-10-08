<template>
  <div id="container">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Edit from './components/Edit.vue'

export default {
  name: 'app',
  components: {
    Header,
    Home,
    Edit
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
