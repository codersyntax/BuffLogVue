import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Edit from './components/Edit.vue'
import Create from './components/Create.vue'
import View from './components/View.vue'
import ContactRequests from './components/ContactRequests.vue'
import Tag from './components/Tag.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/view:id', component: View },
  { path: '/edit:id', component: Edit },
  { path: '/tag:tag', component: Tag },
  { path: '/create', component: Create },
  { path: '/contact-requests', component: ContactRequests }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
