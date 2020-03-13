<template>
  <div id="app">
    <el-button type="success" round plain disabled></el-button>
  </div>
</template>

<script>
import ElButton from './components/ElButton.vue'

export default {
  name: 'App',
  components: {
    ElButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
