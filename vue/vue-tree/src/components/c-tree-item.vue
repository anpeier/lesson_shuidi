<template>
<li>
  <span @click="toggle">
    <em v-if="hasChild" class="icon">{{open?'-':'+'}}</em>
    <em v-if="!hasChild" class="icon file-text"></em>
    {{data.name}}
  </span>
  <ul v-if="hasChild" v-show="open">
    <tree-item v-for="(item, index) in data.children"
     :data="item" :key="index"></tree-item>
  </ul>
</li>
</template>
<script>
// import 
export default {
  name: 'TreeItem',
  props: {
    data: {
      type: [Object, Array],
      required: true
    }
  },
  computed: {
    hasChild() {
      return this.data.children && this.data.children.length
    }
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      if (this.hasChild) {
        this.open = !this.open
      }
    }
  }
}
</script>