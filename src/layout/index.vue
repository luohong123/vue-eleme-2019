<template>
  <div class="layout">
    <transition :name="transitionName">
      <router-view class="Router"></router-view>
    </transition>
    <footer>
      <navtab v-bind:tabs="tabs" />
    </footer>
  </div>
</template>

<script>
import navtab from '@/components/NavTab';
export default {
  name: 'Layout',
  components: {
    navtab
  },
  data: function() {
    return {
      transitionName: 'slideleft',
      tabs: [{
        id: 1,
        name: '首页',
        icon: 'home',
        activeIcon: 'home-active',
        router: '/place'
      }, {
        id: 2,
        name: '发现',
        icon: 'discover',
        activeIcon: 'discover-active',
        router: '/discover'
      }, {
        id: 3,
        name: '订单',
        icon: 'order',
        activeIcon: 'order-active',
        router: '/order'
      }, {
        id: 4,
        name: '我的',
        icon: 'profile',
        activeIcon: 'profile-active',
        router: '/profile'
      }]
    }
  },
  watch: {
    $route() { // 监听路由变化重新赋值
      if (this.$router.isleft) {
        this.transitionName = 'slideleft';
      }
      if (this.$router.isright) {
        this.transitionName = 'slideright';
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

