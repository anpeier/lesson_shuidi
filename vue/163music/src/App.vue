<template>
  <div id="app">
    <div class="user">
      <div class="back" @click="back">
        <i class="fa fa-angle-left"></i>
      </div>
      <div class="switches-wrapper">
      <switches :switches="switches" 
      :currentIndex="currentIndex"
       @switch="changeItem"></switches>
    </div>
    </div>
  </div>
</template>
<script>
import Switches from './components/switches/switches'
export default {
  methods: {
    back() {
    console.log('返回')
    },
    changeItem(index){
      this.currentIndex = index;
    }
  },
  components: {
    'switches': Switches
  },
  data() {
    //这里存放数据
    return {
      currentIndex: 0,
      switches: [
        {
          name: '我的收藏'
        },
        {
          name: '最近播放'
        }
      ]
    };
  },
}
</script>
<style lang="stylus">
@import "./common/styl/reset";
@import "./common/styl/variable";

@font-face {
  font-family: 'FontAwesome';
  src: url('./common/font-awesome/fonts/fontawesome-webfont.eot');
  src: url('./common/font-awesome/fonts/fontawesome-webfont.eot?#iefix') format('embedded-opentype'),
    url('./common/font-awesome/fonts/fontawesome-webfont.woff2') format('woff2'),
    url('./common/font-awesome/fonts/fontawesome-webfont.woff') format('woff'),
    url('./common/font-awesome/fonts/fontawesome-webfont.ttf') format('truetype'),
    url('./common/font-awesome/fonts/fontawesome-webfont.svg') format('svg');
  font-weight: normal;
  font-style: normal;
}

.fa
  display inline-block
  font normal normal normal 14px/1 FontAwesome
  font-size inherit
  text-rendering auto
  -webkit-font-smoothing antialiased

.user
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  z-index 100
  background $color-background
  .back
    position absolute
    top 0
    left 4px
    .fa-angle-left
      padding 5px 10px
      font-size 30px
      color #aaa
      &:before
        content "\F104"
  .switches-wrapper
    display flex 
    align-items center
    background red
    height 44px
</style>
