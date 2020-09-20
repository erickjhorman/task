import Vue from 'vue';
import App from './App.vue';
import router from './router';
import jquery from 'jquery';
import popper from 'popper.js';
import bootsrap from 'bootstrap';
import bootsrapV from 'bootstrap-validator';
import PortalVue from 'portal-vue';
import Vuelidate from 'vuelidate';
import Notifications from 'vue-notification';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
('./assets/app.css');
Vue.config.productionTip = false;
Vue.use(Notifications);
Vue.use(Vuelidate);
Vue.use(bootsrapV);

new Vue({
  router,
  jquery,
  popper,
  bootsrap,
  bootsrapV,
  PortalVue,
  BootstrapVue,
  IconsPlugin,
  render: h => h(App),
}).$mount('#app');
