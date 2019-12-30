<!--  -->
<template>
    <ul class="switches">
        <li v-for="(item, index) in switches" 
        :key="item.id" 
        class="switches-item"
        :class="{'active' : currentIndex === index}"
        @click="changeItem(index)">
            <span>{{item.name}}</span>
        </li>
    </ul>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    //外来数据
    props: {
        switches: {
            type: Array,
            required: true
        },
        currentIndex: {
            type: Number,
            defalut: 0
        }
    },
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
    //这里存放自有数据
    return {

        };
    },
    methods: {
      changeItem(index){
        // 组件通信
        this.$emit('switch', index)   
      }
    }
}
</script>
<style lang='stylus'>
    //@import url(); 引入公共css类
    @import "../../common/styl/variable";
    .switches
      display flex 
      align-items center
      width 240px
      margin 0 auto
      .switches-item
        flex 1
        padding 8px
        margin 0 20px
        text-align center
        font-size $font-size-medium-x
        color $color-text-l
        border-bottom 2px solid $color-theme
        &.active
          color #fff
          border-bottom 2px solid $color-text-l
</style>