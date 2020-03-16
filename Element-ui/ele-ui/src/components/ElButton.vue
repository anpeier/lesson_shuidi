<template>
  <button
    class="el-button"
    @click="handleClick"
    :type="nativeType"
    :class="[
    type ? 'el-button--' + type : '',
    size ? 'el-button--' + size : '',
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
</template>

<script>
export default {
  name: 'ElButton',
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
    size: {
      type: String,
      default: 'meduim'
    },
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
