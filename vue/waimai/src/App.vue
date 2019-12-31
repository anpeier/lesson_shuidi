<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <!-- 路由组件 -->
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="seller">商家</router-link>
      </div>
    </div>
    <router-view />
    <!-- <v-footer /> -->
  </div>
</template>

<script>
import header from './components/header/header.vue'; // 引入组件
import footer from './components/footer/footer.vue';
const response = require('./common/data/seller.json');
// console.log(response);
import { urlParse } from './common/js/util';
export default {
  data() {
    return {
      currentIndex: 0,
      seller: {
        id: (() => {
          let queryParam = urlParse();
          return queryParam.id
        })()
      }
    }
  },
  components: {
    'v-header': header,
    'v-footer': footer
  },
  created() {
    this.seller = Object.assign({}, this.seller, response.data)
    // console.log(this.seller);
  },
}
</script>

<style lang="stylus">
@import "./common/stylus/mixin";

*
  margin 0
  padding 0
.tab
  display flex
  width 100%
  height 40px
  line-height 40px
  border-1px(rgba(7, 17, 27, 0.5))
  .tab-item
    flex 1
    text-align center
    & > a
      display block
      font-size 14px
      color rgb(77, 85, 93)
      text-decoration none
      &.active
        color: rgb(240, 20, 20)
</style>
