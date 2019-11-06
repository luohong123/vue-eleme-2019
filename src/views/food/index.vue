<template>
  <div class="food">
    <!-- <tab>
      <tab-item v-for="n in 8" :key="n" :selected="n===1">已发货{{ n }}</tab-item>
    </tab> -->
    <group>
      <cell title="hello world1111" @click.native="alert"></cell>
    </group>
  </div>
</template>
<script>
import { Group, Cell } from 'vux';
// import Group from "vux/src/components/group";
// import Cell from "vux/src/components/cell";
export default {
  name: 'Food',
  components: {
    Group,
    Cell
  }
};
</script>
<style lang="sass" scoped>

</style>