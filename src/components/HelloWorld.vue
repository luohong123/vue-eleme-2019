<template>
  <div class="hello">
    11
    <ul>
      <li>q</li>
    </ul>
  </div>
</template>

<script>
// import api from '@/utils/request.js';
import {
  product
} from '@/api/product';
// import Axios from 'axios';
export default {
  name: 'HelloWorld',
  props: {},
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getProduct();
  },
  methods: {
    getProduct: function() {
      product({}).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->

<style scoped>
</style>
