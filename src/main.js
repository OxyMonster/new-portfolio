import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import AboutMe from './components/AboutMe.vue'; 
import Contact from './components/Contact.vue'; 
import Works from './components/Works.vue'; 
import BootstrapVue from 'bootstrap-vue'
import VueTypedJs from 'vue-typed-js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter); 
Vue.use(BootstrapVue); 
Vue.use(VueTypedJs); 

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/works', component: Works },
  { path: '/aboutMe', component: AboutMe }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router, 
  render: h => h(App)
})
