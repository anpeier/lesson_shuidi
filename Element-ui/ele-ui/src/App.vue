<template>
  <div id="app">
    <el-button type="primary" round @click="print">编辑按钮</el-button>
    <el-button>
      上传
      <i class="el-icon-upload el-icon--right"></i>
    </el-button>
  </div>
</template>

<script>
import ElButton from "./components/ElButton.vue";

export default {
  name: "App",
  components: {
    ElButton
  },
  methods: {
    print(evt) {
      console.log(evt);
    }
  }
};
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
