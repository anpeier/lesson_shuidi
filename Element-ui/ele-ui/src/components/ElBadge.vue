<template>
  <div class="el-badge">
    <slot></slot>
    <transition name="el-zoom-in-center">
    <sub
      v-show="!hidden && (content || content === 0 || isDot)"
      v-text="content"
      class="el-badge__content"
      :class="[
      'el-badge__content--' + type,
    {
      'is-fixed': $slots.default,
       // html 风格
      'is-dot': isDot 
    }
    ]"
    ></sub>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ElBadge",
  props: {
    value: [String, Number],
    max: Number,
    // js风格
    isDot: Boolean,
    hidden: Boolean,
    type: {
      type: String,
      validator(val) {
        return (
          ["primary", "success", "warning", "info", "danger"].indexOf(val) > -1
        );
      }
    }
  },
  computed: {
    content() {
      if (this.isDot) return;
      const value = this.value;
      const max = this.max;
      console.log(typeof max);
      if (typeof value === "number" && typeof max === "number") {
        return max < value ? `${max}+` : value;
      }

      return value;
    }
  }
};
</script>

<style>
</style>