<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      res: ''
    }
  },
  mounted() {
    // 本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res
    // })

    // 本地集成mockjs
    // this.axios.get('/user/login').then((res) => {
    //   this.res = res
    //   console.log(this.res)
    // })
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
