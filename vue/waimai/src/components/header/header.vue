<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img :src="seller.avatar" alt="" width="64" height="64">
            </div>
            <div class="content">
                <div class="title">
                    <div class="brand"></div>
                    <div class="name">{{seller.name}}</div>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div class="support" v-if="seller.supports">
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// 一个页面，有多个组件构成，需要给组件数据
export default {
    props: {
        seller: {
            type: Object
        }
    }
}
</script>
<style lang="stylus">
@import "../../common/stylus/mixin";
.header
  position relative
  overflow hidden
  color #ffffff
  background rgba(7, 17, 27, 0.5)
  .content-wrapper
    position relative
    padding 24px 12px 18px 24px
    font-size 0
    .avatar
      display inline-block
      vertical-align top 
      img
       border-radius 2px
    .content
      display inline-block
      margin-left 16px
      .title
        margin 2px 0 8px 0
        .brand
          display inline-block
          vertical-align top 
          width 30px
          height 18px
          bg-image('brand')
          background-size 30px 18px
          background-repeat no-repeat
        .name
          font-size 16px
          line-height 18px
          margin-left 6px
          font-weight bold
</style>