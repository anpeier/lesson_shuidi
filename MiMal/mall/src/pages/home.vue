<template>
  <div>
      <nav-header></nav-header>
      <router-view />
      <nav-footer :showLogo="true"></nav-footer>
  </div>
</template>

<script>
import NavHeader from './../components/NavHeader'
import NavFooter from './../components/NavFooter'
export default {
  name: 'nav-home',
  components: {
    NavHeader,
    NavFooter
  }
}
</script>

<style>

</style>