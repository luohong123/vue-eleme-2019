<template>
  <ul class="commodity">
    <li v-on:click="goTo">
      <section>
        <div class="shopinfo">
          <div class="logo-main">
            <img src="https://cube.elemecdn.com/a/7c/a7e9e5aa15b1b8fc6f1bece8ee385jpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed" />
          </div>
          <div class="shopinfo-main">
            <h3 class="shopname">
              <i class="index-premium">品牌</i>
              <span>李先生（北一出口店）</span>
              <i class="omit">...</i>
            </h3>
            <section class="index-line">
              <div class="indexrate-wrap">
                <rater v-model="rate" class="rate-star"></rater>
                <span class="index-rate">4.8</span>
                <span>月售1227单</span>
              </div>
              <div class="delivery">
                <div class="delivery-icon-hollow">
                  蜂鸟专送
                </div>
              </div>
            </section>
            <section class="index-line">
              <div class="index-moneylimit">
                <span>￥20 起送</span>
                <span>配送费 ￥5</span>
              </div>
              <div class="index-timedistance">
                <span>269m</span>
                <span>30分钟</span>
              </div>
            </section>
          </div>
        </div>
        <div class="index-activity-wrap">
          <section class="index-tagline">
            <span class="mini-tag">盖浇饭</span>
            <span class="mini-tag">品牌联盟</span>
            <span class="index-recommendTag"> <img src="https://cube.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?x-oss-process=image/format,webp/resize,w_20,h_20,m_fixed"  width="5" height="5"/> 口碑人气好店</span>
          </section>
          <section class="index-activities">
            <div class="index-activityList">
              <div class="index-actRow" v-for="(item, index) in activities" v-bind:key="item.id" v-bind:class="[(index > 1 && isHidden) ? 'hidden' : '']">
                <span class="index-icon" v-bind:style="{background: item.bgColor}">{{ item.name }}</span>
                <span class="index-desc">{{ item.description }}</span>
              </div>
            </div>
            <div class="index-activityBtn" v-on:click="toggle">
              <span>{{ activities.length }} 个活动</span>
              <img v-bind:class="{'index-open': !isHidden}" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+">
            </div>
          </section>
        </div>
      </section>
    </li>
  </ul>
</template>
<script>
import Rater from 'vux/src/components/rater';
export default {
  name: 'CommodityItem',
  components: {
    Rater
  },
  data: function() {
    return {
      rate: 5,
      isHidden: true,
      activities: [{
        id: 1,
        name: '减',
        bgColor: 'rgb(240, 115, 115)',
        description: '满30减10，满55减16，满80减25'
      },{
        id: 2,
        name: '首',
        bgColor: 'rgb(112, 188, 70)',
        description: '新用户下单立减17元'
      },{
        id: 3,
        name: '特',
        bgColor: 'rgb(241, 136, 79)',
        description: '特价商品29.9元起'
      },{
        id: 4,
        name: '赔',
        bgColor: 'rgb(153, 153, 153)',
        description: '商家原因导致订单取消，赔付代金券'
      },{
        id: 5,
        name: '票',
        bgColor: 'rgb(153, 153, 153)',
        description: '该商家支持开发票，请在下单时填写好发票抬头'
      }]
    }
  },
  methods: {
    toggle: function() {
      console.log('hidden')
      this.isHidden = !this.isHidden;
    },
    goTo: function() {
      this.$router.push('/shop');
    }
  }
}
</script>
<style lang="less">

.index-premium {
  font-style: normal;
  position: relative;
  margin-right: 5px;
  text-align: center;
  line-height: normal;
  font-size: 12px;
  padding: 1px;
  &:after {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    color: #6f3f15;
    font-weight: 700;
    font-size: .586667rem;
    border-radius: 1px;
    background-image: linear-gradient(-139deg, #fff100, #ffe339);
    white-space: nowrap;
  }
}
.shopinfo {
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  .logo-main {
    width: 100px;
    height: 100px;
    & img {
      width: 100%;
      height: 100%;
    }

  }
  & .shopinfo-main {
    padding-left: 20px;
  }
}
.index-activities {
  display: flex;
  align-content: stretch;
  overflow: hidden;
}
.index-activity-wrap {
  padding-left: 130px;
}
.index-actRow {
  & .index-icon {
    color: #fff;
    border-radius: 1px;
    padding: 1px;
    margin-right: 10px;
  }
}
.hidden {
  display: none;
}
.index-activityBtn {
  text-align: right;
  color: #999;
  & img {
    transition: all .3s ease-in-out;
  }
}
.index-open {
  display: inline-block;
  transform: rotate(180deg);
}
</style>