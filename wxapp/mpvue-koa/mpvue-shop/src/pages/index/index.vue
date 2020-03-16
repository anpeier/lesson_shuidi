<template>
  <div class="index">
    <!-- 头部的搜索 -->
    <div class="search">
      <div @click="toMappage">{{ cityName }}</div>
      <div>
        <input type="text" placeholder="搜索商品" />
        <span class="icon"></span>
      </div>
    </div>
    <div class="swiper">
      <swiper
        class="swiper-container"
        indicator-dots="true"
        autoplay="true"
        interval="3000"
        circular="true"
        duration="500"
      >
        <block v-for="(item, idx) in banner" :key="idx">
          <swiper-item class="swiper-item">
            <image :src="item.image_url" class="slider-image"> </image>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="channel">
      <div
        v-for="(item, idx) in channel"
        :key="idx"
        @click="categoryList(item.id)"
      >
        <img :src="item.icon_url" alt="" />
        <p>{{ item.name }}</p>
      </div>
    </div>
    <div class="brand">
      <div class="head" @click="toBrandList">
        品牌制造商直供
      </div>
      <div class="content">
        <div v-for="(item,idx) in brandList" :key="idx" @click="goTobrandDetail(item.id)">
          <div>
            <p>{{item.name}}</p>
            <p>{{item.floor_price}}元起</p>
          </div>
          <img :src="item.new_pic_url || item.pic_url" alt="">
        </div>
      </div>
    </div>
    <div class="newgoods">
      <div class="newgoods-top">
        <div class="top">
        <p>新品首发</p>
        <p>查看全部</p>
        </div>
      </div>
      <div class="list">
        <ul>
          <scroll-view class="scroll-view" :scroll-x="true">
            <li v-for="(item,idx) in newGoods" :key="idx">
              <img :src="item.list_pic_url" alt="">
              <p>{{item.name}}</p>
              <p>{{item.goods_brief}}</p>
              <p>￥{{item.retail_price}}</p>
            </li>
          </scroll-view>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import amapFile from "../../utils/amap-wx";
import { mapState, mapMutations } from "vuex";
import { get } from "../../utils";
export default {
  data() {
    return {
      banner: [],
      channel: [],
      brandList: [],
      newGoods: []
    };
  },
  mounted() {
    this.getCityName();
    this.getData();
  },
  computed: {
    ...mapState(["cityName"])
  },
  methods: {
    ...mapMutations(["update"]),
    toMappage() {
      // 通过wx.getSetting 先查询一下用户是否授权 "scoped.record"
      wx.getSetting({
        success: res => {
          // 如果没有同意  打开设置
          console.log(res);
          if (res.authSetting["scope.userLocation"]) {
            wx.openSetting({
              success: res => {
                // 获取授权位置信息
                this.getCityName();
              }
            });
          } else {
            // this.getCityName()
            wx.navigateTo({
              url: "/pages/mappage/main"
            });
          }
        },
        fail: info => {
          console.log(info);
        },
        complete: () => {}
      });
    },
    getCityName() {
      var myAmapFun = new amapFile.AMapWX({
        key: "af26bdcdd4d69cf71e971b8450819b5d"
      });
      myAmapFun.getRegeo({
        success: data => {
          console.log(data[0].regeocodeData.addressComponent.city);
          const cityName = data[0].regeocodeData.addressComponent.city;
          this.update({ cityName: cityName });
        },
        fail: info => {
          console.log(info);
          this.update({ cityName: "定位中..." });
        }
      });
    },
    async getData() {
      const data = await get("/index/index"); //http://localhost:5757/lm/index/index
      console.log(data);
      this.banner = data.banner;
      this.channel = data.channel;
      this.brandList = data.brandList
      this.newGoods = data.newGoods
    },
    categoryList(id) {
      wx.navigateTo({ url: `/pages/category/main?id=${id}` });
    },
    goTobrandDetail(id) {
      wx.navigateTo({ url: `/pages/branddeatil/main?id=${id}` });
    },
    toBrandList() {
      wx.navigateTo({ url: '/pages/brandlist/main' });
    }
  }
};
</script>

<style lang="less">
@import "./style.less";
</style>
