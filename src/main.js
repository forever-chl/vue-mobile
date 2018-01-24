// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Swiper from 'swiper'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store/index.js'
import Vuex from 'vuex'

Vue.use(Vuex);
Vue.use(VueAxios,axios)
Vue.config.productionTip = false;
Vue.prototype.$Swiper=Swiper;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
