<template>
  <div class="index">
    <!-- 头部的搜索 -->
    <div class="search">
      <div @click="toMappage">{{cityName}}</div>
      <div>
        <input type="text" placeholder="搜索商品">
        <span class="icon"></span>
      </div>
    </div>
  </div>
</template>

<script>
import amapFile from '../../utils/amap-wx'
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return{
    }
  },
  // created () {
  //   this.getCityName()
  // },
  computed: {
    ...mapState(['cityName'])
  },
  methods: {
    ...mapMutations(['update']),
    toMappage() {
      // 通过wx.getSetting 先查询一下用户是否授权 "scoped.record"
      wx.getSetting({
        success: (res) => {
          // 如果没有同意  打开设置
          console.log(res)
          if (res.authSetting['scope.userLocation']) {
            wx.openSetting({
              success: res => {
                // 获取授权位置信息
                this.getCityName()
              }
            })
          } else {
            // this.getCityName()
            wx.navigateTo({
              url: '/pages/mappage/main'
            })
          }
        },
        fail: (info) => {
          console.log(info)
        },
        complete: () => {}
      })
    },
    getCityName() {
      var myAmapFun = new amapFile.AMapWX({key:'af26bdcdd4d69cf71e971b8450819b5d'})
      myAmapFun.getRegeo({
        success: (data) => {
          console.log(data[0].regeocodeData.addressComponent.city)
          this.cityName = data[0].regeocodeData.addressComponent.city
        },
        fail: (info) => {
          console.log(info)
          this.update({cityName: '北京'})
        }
      })
    }
  }
}
</script>

<style lang="less">
@import './style.less';
</style>