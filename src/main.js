import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Edit from './components/Edit.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/edit:id', component: Edit }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
