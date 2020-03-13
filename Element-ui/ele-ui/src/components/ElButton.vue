<template>
<div>
  <button
    class="el-button"
    @click="handleClick"
    :type="nativeType"
    :class="[
    type ? 'el-button--' + type : '',
    {
       'is-round': round,
       'is-plain': plain,
       'is-disabled': disabled,
       'is-circle': circle,
       'is-loading': loading
    }
  ]"
  >
  <i class="el-icon-loading" v-if="loading"></i>
  <!-- loading 状态优先 -->
  <i :class="icon" v-if="icon && !loading"></i>
  <span v-if="$slots.default"><slot></slot></span>
  </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "default"
    },
    round: Boolean,
    plain: Boolean,
    disabled: Boolean,
    circle: Boolean,
    icon: String,
    loading: Boolean,
    nativeType: {
      type: String,
      default: 'button'
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click',evt)
    }
  }
};
</script>

<style></style>
