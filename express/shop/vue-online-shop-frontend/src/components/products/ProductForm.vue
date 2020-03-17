<template>
  <div class="productInfo">
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
        <el-input v-model="modelData.name"></el-input>
      </el-form-item>
      <el-form-item label="Price">
        <el-input v-model="modelData.price"></el-input>
      </el-form-item>
      <el-form-item label="Manufacturer ">
        <el-select v-model="modelData.manufacturer.name" clearable placeholder="请选择制造商">
          <el-option
            v-for="manufacturer in manufacturers"
            :key="manufacturer._id"
            :label="manufacturer.name"
            :value="manufacturer.name"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Image ">
        <el-input v-model="modelData.image"></el-input>
      </el-form-item>
      <el-form-item label="Description ">
        <el-input type="textarea" v-model="modelData.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-if="isEditing" type="primary" @click="onSubmit">Update Product</el-button>
        <el-button v-else @click="onSubmit">Add Product</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modelData: { manufacturer: { name: "" } }
    };
  },
  props: ["model", "manufacturers", "isEditing"],
  created() {
    // 在该组件中自定义一个 modelData 对象，
    // 并使用默认初始形式。然后在组件刚被创建时，
    // 先将从父组件获取的 model 对象赋值给一个临时变量 product，
    // 然后将 product 浅拷贝到 modelData 对象中，
    // 这样就避免了表单数据对象使用计算属性。但是这仅仅完成了一半的工作，
    // 因为我们需要实现双向绑定的效果，因此我们需要监测表单组件的变化，通过使用 watch 方法监测用户的输入，
    // 然后将新数据储存到 modelData 对象中，这样就成功实现了双向绑定，而且表单也能随意进行编辑。
    const product = this.model;
    this.modelData = { ...product, manufacturer: { ...product.manufacturer } };
  },
  watch: {
    model(val, oldVal) {
      this.modelData = val;
    }
  },
  computed: {
    loading() {
      return this.$store.state.showLoader;
    }
  },
  methods: {
    onSubmit() {
      console.log(this.modelData);
      // 由于表单中只绑定了modelData.manufacturer.name，
      // 缺少manufacturer._id,但是后端需要manufacturer整个对象,
      // 所以需要将manufacturers中对应的manufacturer找出并覆盖到modelData中
      const manufacturer = this.manufacturers.find(
        item => item.name === this.modelData.manufacturer.name
      );
      this.modelData.manufacturer = manufacturer;
      this.$emit("save-product", this.modelData);
    }
  }
};
</script>
<style>
.productInfo {
  padding-top: 10px;
}
.form {
  margin: 0 auto;
  width: 500px;
}
.el-input__inner {
  height: 60px;
}
</style>
