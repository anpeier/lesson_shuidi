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
          <swiper-itme class="swiper-item">
            <image
              :src="item.image_url"
              class="slider-image">
            </image>
          </swiper-itme>
        </block>
      </swiper>
    </div>
  </div>
</template>

<script>
import amapFile from "../../utils/amap-wx";
import { mapState, mapMutations } from "vuex";
import { get } from '../../utils'
export default {
  data() {
    return {
      banner: []
    };
  },
  mounted() {
    this.getCityName();
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
      const data = await get('/index/index') //http://localhost:5757/lm/index/index
      console.log(data)
    }
  }
};
</script>

<style lang="less">
@import "./style.less";
</style>
