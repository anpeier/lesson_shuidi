<template>
  <div class="mappage">
    <div class="section">
      <input type="text" v-model="keywords" placeholder="搜索" focus="true" @input="chooseAddress" />
    </div>
    <scroll-view :scroll-y="true" class="addcont" style="height: 500rpx;">
      <div
        class="result"
        v-for="(item, index) in tips"
        :key="index"
        @touchstart="bindSearch(item.name)"
      >{{ item.name }}</div>
    </scroll-view>
    <div class="map_container">
      <div class="title">显示当前位置</div>
      <map
        class="map"
        id="map"
        scale="16"
        :longitude="longitude"
        :latitude="latitude"
        :markers="markers"
      ></map>
    </div>
  </div>
</template>

<script>
import amapFile from "../../utils/amap-wx";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      tips: [],
      longitude: 0,
      latitude: 0,
      markers: [],
      keywords: ""
    };
  },
  mounted() {
    this.getMapaddress();
  },
  methods: {
    ...mapMutations(["update"]),
    getMapaddress() {
      var myAmapFun = new amapFile.AMapWX({
        key: "af26bdcdd4d69cf71e971b8450819b5d"
      });
      let marker = []
      myAmapFun.getRegeo({
        iconPath: "/static/images/address.png",
        iconWidth: 22,
        iconHeight: 32,
        success: data => {
          const res = data[0];
          console.log(res);
          marker = [
            {
              id: res.id,
              longitude: res.longitude,
              latitude: res.latitude,
              width: res.width,
              height: res.height
            }
          ];
          this.markers = marker;
          console.log(this.markers);
          this.longitude = res.longitude;
          this.latitude = res.latitude;
        },
        fail: err => {
          console.log(err);
        }
      });
    },
    chooseAddress(e) {
      console.log(this.longitude);
      //   console.log(e);
      let keywords = this.keywords;
      var myAmapFun = new amapFile.AMapWX({
        key: "af26bdcdd4d69cf71e971b8450819b5d"
      });
      myAmapFun.getInputtips({
        keywords: keywords,
        location: "",
        success: data => {
          if (data && data.tips) {
            this.tips = data.tips;
          }
        }
      });
    },
    bindSearch(address) {
      this.update({ cityName: address });
      wx.navigateBack({
        delta: 1
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "./style.less";
</style>
