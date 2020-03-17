<template>
  <div class="manufacturerInfo">
    <el-form
      class="form"
      ref="form"
      label-width="180px"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
      <el-form-item label="Name">
        <el-input v-model="manufacturerData.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          v-if="isEditing"
          type="primary"
          native-type="submit"
          @click="onSubmit"
        >Update Manufacturer</el-button>
        <el-button v-else @click="onSubmit">Add Manufacturer</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: ["model", "isEditing"],
  data() {
    return {
      manufacturerData: { name: "" }
    };
  },
  created() {
    this.manufacturerData = this.model;
  },
  watch: {
    model(val, oldVal) {
      this.manufacturerData = val;
    }
  },
  computed: {
    loading() {
      return this.$store.state.showLoader;
    }
  },
  methods: {
    onSubmit() {
      this.$emit("save-manufacturer", this.manufacturerData);
    }
  }
};
</script>
