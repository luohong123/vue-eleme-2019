import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import Layout from '../layout';
const router = new Router({
  routes: [{
    path: '/',
    component: Layout,
    children: [{
      path: '/msite', // 首页-tab
      component: () => import('@/views/msite/index')
    }, {
      path: '/discover', // 发现
      component: () => import('@/views/discover/index')
    }, {
      path: '/order', // 订单
      component: () => import('@/views/order/index')
    }, {
      path: '/profile', // 我的
      component: () => import('@/views/profile/index')
    }]
  }, {
    path: '/msite/food',
    component: () => import('@/views/food/index')
  }, {
    path: '/home',
    component: () => import('@/views/home/index')
  }, {
    path: '/login',
    component: () => import('@/views/login/index')
  }]
});
export default router;
