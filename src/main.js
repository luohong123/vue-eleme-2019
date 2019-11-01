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
import { mockXHR } from '../mock';
mockXHR();
new Vue({
  render: h => h(App)
}).$mount('#app');
