<template>
  <div class="food">
    <tab>
      <tab-item v-for="n in 8" :key="n" :selected="n===1">已发货{{ n }}</tab-item>
    </tab>
  </div>
</template>
<script>
import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux';
export default {
  name: 'Food',
  components: {
    Tab,
    TabItem,
    Sticky,
    Divider,
    XButton,
    Swiper,
    SwiperItem
  }
}
</script>
<style lang="sass" scoped>

</style>