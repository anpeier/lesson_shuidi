<template>
  <!-- 菜单 -->
  <div class="tree-menu">
    <ul v-for="item in data" :key="item.name">
      <!-- 一个节点  组件  算法  思想 递归 -->
      <tree-item :data="item">
      </tree-item>
    </ul>
  </div>
</template>

<script>
import TreeItem from './c-tree-item'
export default {
  name: 'c-tree',
  props: {
    data: {
      type: [Object, Array],
      required: true
    }
  },
  components: {
    TreeItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
