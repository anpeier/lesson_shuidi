<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item, index) in goods" class="menu-item" :key="index">
            <span class="text border-1px">
              <span class="icon"></span>{{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li v-for="item in goods" class="food-list" :key="item.id" ref="foodList">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li v-for="food in item.foods" class="food-item border-1px" :key="food.id">
                <div class="icon">
                  <img :src="food.icon" width="57" height="57">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- <shopcart />
    <cartcontrol />-->
    <food :food="selectedFood" ref="food"/>
  </div>
</template>
<script>
import BScroll from 'better-scroll';
// 组件化
import shopcart from '../components/shopcart/shopcart';
import cartcontrol from '../components/cartcontrol/cartcontrol';
import food from '../components/food/food';
const response = require('../common/data/goods.json');

export default {
  data() {
    return {
      goods: [],
      selectedFood: {},
    }
  },
  components: {
    shopcart,
    cartcontrol,
    food
  },
  created() {
    this.goods = response.data;
    // 页面的响应,页面更新完之后
    this.$nextTick(() => {
      this._initScroll(); // 可以加上js特效
    })
  },
  methods: {
    _initScroll() {
      // console.log(this.$refs);
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      }),
      this.foodScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  .goods
    display flex
    position absolute
    top 174px
    bottom 46px
    width 100%
    overflow hidden
    .menu-wrapper
      flex 0 0 80px
      width 80px
      background-color #f3f5f7
      .menu-item
        display table
        height 54px
        width 56px
        padding 0 12px
        line-height 14px
        &.current
          position relative
          z-index 10
          margin-top -1px
          background-color #fff
          font-weight 700
        .text
          display table-cell
          width 56px
          vertical-align middle
          font-size 12px
</style>