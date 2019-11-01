<template>
  <div class="hello">
    <ul>
      <li v-for="product in products" v-bind:key="product.id">{{ product.title }}</li>
    </ul>
  </div>
</template>

<script>
import {
  productList
} from '@/api/product';
// import Axios from 'axios';
export default {
  name: 'HelloWorld',
  props: {},
  data() {
    return {
      products: []
    };
  },
  created() {
    this.getProduct();
  },
  methods: {
    getProduct: function() {
      productList({}).then(res => {
        console.log(res.data.items);
        this.products = res.data.items;
      });
    }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->

<style scoped>
</style>
