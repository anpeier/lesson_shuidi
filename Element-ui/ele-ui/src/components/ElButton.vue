<template>
  <button
    class="el-button"
    :class="[
    type ? 'el-button--' + type : '',
    {
       'is-round': round,
       'is-plain': plain,
       'is-disabled': disabled
    }
  ]"
  >按钮</button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "default"
    },
    round: {
      type: Boolean,
      default: false
    },
    plain: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    }
  }
};
</script>

<style></style>
