<template>
  <div class="container">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Edit from './components/Edit.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Home,
    Edit,
    Footer
  }
}
</script>

<style>
.container {
    position: absolute;
    width: 1000px;
    top:0px;
    bottom:0px;
    left: 50%;
    margin-left: -500px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

#header {
  padding: 10px;
  text-align:right;
}

#log-button {
    border: none;
    color: white;
    padding: 8px 16px;
    text-align: center;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
}

#log-button:hover {
    background-color: #008CBA;
    color: white;
}

.go-back {
  text-align: left;
}

.edit-post {
    padding: 25px 25px 50px 25px;
}

.edit-post h2 {
    text-align: center;
}

.edit-post input, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}

.edit-post-button {
    border: none;
    color: white;
    padding: 8px 16px;
    text-align: center;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
}

.edit-post-button:hover {
    background-color: #008CBA;
    color: white;
}

.comments {
    padding: 25px 25px 50px 25px;
}

.comments h3 {
    color: #999;
}

.comments ul {
    list-style-type: none;
}

.comments input,textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}

.comment-delete {
    font-size: 0.8em;
    float:right;
    text-align:right;
}

.contact-request-delete {
    font-size: 0.8em;
    float:right;
    text-align:right;
}

#footer {
    background-image: linear-gradient(rgba(244, 244, 244, 1), rgba(255,255,255,1));
    margin-top: 40px;
    padding: 25px 25px 100px 25px;
}

#footer p {
    text-align: center;
}

#footer h2 {
    color: #999;
}

#footer input,textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}

.contact-request {
    position: relative;
    padding: 25px;
}

.blog-post {
    position: relative;
    padding: 25px;
}

.blog-title h2,a {
    color: #999;
    text-decoration: none;
}

.blog-info {
    color: #666;
    font-size: 0.8em;
    text-decoration: none;
}

.post-changes {
    color: #666;
    font-size: 0.8em;
    text-decoration: none;
    float:right;
}

.post-changes a {
    color: #666;
    text-decoration: none;
}

.blog-body {
    color: #333;
    margin-left: 30px;
    text-indent: 2em;
}

.view-more {
    float:right;
    border: none;
    color: #333;
    padding: 8px 16px;
    text-align: center;
    margin: 4px 2px;
    font-size: 12px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;
    text-decoration: none;
}

.view-more:hover {
    background-color: #008CBA;
    color: white;
}
</style>
