import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
// 引入样式
import '@/assets/styles/styles.scss';
Vue.config.productionTip = false;
//
Vue.prototype.$http = axios;
//
import '../mock';
import { mockXHR } from '../mock/index';
mockXHR();

import router from './router';
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
