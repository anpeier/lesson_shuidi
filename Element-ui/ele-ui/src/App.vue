<template>
  <div id="app">
    <!-- <el-button type="primary" round @click="print">编辑按钮</el-button>
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
    </div> -->
    <el-badge :value="0" :hidden="ishidden" :max="10" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <el-badge :value="12" is-dot :max="10" type="primary" class="item">
      <el-button size="small">点赞</el-button>
    </el-badge>
  </div>
</template>

<script>
import ElButton from "./components/ElButton.vue";
import ElButtonGroup from "./components/ElButtonGroup.vue";
import ElBadge from "./components/ElBadge.vue";

export default {
  name: "App",
  data() {
    return{
      ishidden: false
    }
  },
  components: {
    ElButton,
    ElButtonGroup,
    ElBadge
  },
  mounted() {
    setTimeout(() => {
      this.ishidden = true
    },3000)
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
.item{
  padding-left: 40px;
}
</style>
