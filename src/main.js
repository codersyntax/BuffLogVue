import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Edit from './components/Edit.vue'
import Create from './components/Create.vue'
import View from './components/View.vue'
import ContactRequests from './components/ContactRequests.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/posts/create', component: Create },
  { path: '/posts/:id', component: View },
  { path: '/posts/:id/edit', component: Edit },
  { path: '/contact-requests', component: ContactRequests }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

