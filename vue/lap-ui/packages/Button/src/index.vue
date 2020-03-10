<template>
  <div class="lap-button" :class="['lap-button--' + type]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "lap-button",
  props: {
    type: String
  }
};
</script>

<style scoped>
.lap-button {
  display: inline-block;
  padding: 3px 6px;
  background: #000;
  color: #fff;
}
.lap-button--primary{
  width: 50px;
  font-size: 16px;
  background-color: #FF6600
}
</style>