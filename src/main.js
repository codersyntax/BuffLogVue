import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Edit from './components/Edit.vue'
import Create from './components/Create.vue'
import View from './components/View.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/view:id', component: View },
  { path: '/edit:id', component: Edit },
  { path: '/create', component: Create }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
