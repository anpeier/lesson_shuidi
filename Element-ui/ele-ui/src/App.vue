<template>
  <div id="app">
    <el-button type="primary" round @click="print">编辑按钮</el-button>
    <el-button>
      上传
      <i class="el-icon-upload el-icon--right"></i>
    </el-button>
    <div>
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">
          下一页
          <i class="el-icon-arrow-right el-icon--right"></i>
        </el-button>
      </el-button-group>
    </div>
  </div>
</template>

<script>
import ElButton from "./components/ElButton.vue";
import ElButtonGroup from "./components/ElButtonGroup.vue";

export default {
  name: "App",
  components: {
    ElButton,
    ElButtonGroup
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
