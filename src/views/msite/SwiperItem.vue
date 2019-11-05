<template>
  <div class="swiper-wrap">
    <div class="swiper">
      <ul class="nav-wrap">
        <router-link class="nav-item" v-for="item in navs" v-bind:key="item.id" :to="item.router">
          <li >
            <div class="item-image">
              <img v-bind:src="item.image" />
            </div>
            <span class="title">{{ item.name }}</span>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { msiteList } from '@/api/msite.js';
import {
  productList
} from '@/api/product';
import homeItem1 from '@/assets/images/home-item1.jpeg';
import homeItem2 from '@/assets/images/home-item2.jpeg';
import homeItem3 from '@/assets/images/home-item3.jpeg';
import homeItem4 from '@/assets/images/home-item4.jpeg';
import homeItem5 from '@/assets/images/home-item5.jpeg';
import homeItem6 from '@/assets/images/home-item6.jpeg';
import homeItem7 from '@/assets/images/home-item7.jpeg';
import homeItem8 from '@/assets/images/home-item8.jpeg';
import homeItem9 from '@/assets/images/home-item9.jpeg';
import homeItem10 from '@/assets/images/home-item10.jpeg';
export default {
  name: 'SwiperItem',
  data: function() {
    return {
      navs: [{
      id: '1',
      name: '美食',
      image: homeItem1,
      router: '/msite/food'
    },{
      id: '2',
      name: '大牌惠吃',
      image: homeItem2,
      router: '/msite/food'
    },{
      id: '3',
      name: '商超便利',
      image: homeItem3,
      router: '/msite/food'
    },{
      id: '4',
      name: '水果',
      image: homeItem4,
      router: '/msite/food'
    },{
      id: '5',
      name: '医药健康',
      image: homeItem5,
      router: '/msite/food'
    },{
      id: '6',
      name: '浪漫鲜花',
      image: homeItem6,
      router: '/msite/food'
    },{
      id: '7',
      name: '跑腿代购',
      image: homeItem7,
      router: '/msite/food'
    },{
      id: '8',
      name: '汉堡披萨',
      image: homeItem8,
      router: '/msite/food'
    },{
      id: '9',
      name: '厨房生鲜',
      image: homeItem9,
      router: '/msite/food'
    },{
      id: '10',
      name: '甜品饮品',
      image: homeItem10,
      router: '/msite/food'
    }]
    }
  },
  created() {
    console.log('m11');
    this.getMsite();
  },
  methods: {
    getMsite: function() {
      // productList({}).then(res => {
      //   console.log('mock测试');
      //   console.log(res.data.items);
      // });
      // msiteList({}).then(res => {
      //   this.navs = res.data.items;
      // })
    }
  }
};
</script>
<style scoped lang="scss">
  .nav-wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    & .nav-item {
      margin-top: 2.9vw;
      width: 20%;
      text-align: center;
      & .title{
        color: #666666;
        margin-top: .32rem;
      }
    }
  }
  .item-image {
    width: 12vw;
    height: 12vw;
    margin: 0 auto;
    & img {
      width: 100%;
      height: 100%;
    }
  }
</style>
