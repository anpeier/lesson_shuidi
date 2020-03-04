<template>
  <div class="ali-pay">
    <loading v-if="loading"></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>

<script>
import Loading from "./../components/Loading";
export default {
  name: "alipay",
  components: {
    Loading
  },
  data() {
    return {
      orderId: this.$route.query.orderId,
      content: "", // 支付宝返回表单
      loading: true,
      screenHeight: document.documentElement.clientHeight
    };
  },
  watch: {
    screenHeight(val) {
      this.screenHeight = val;
    }
  },
  mounted() {
    this.screenHeight = document.body.clientHeight;
    window.onresize = () => {
      return (() => {
        this.screenHeight = document.body.clientHeight;
      })();
    };
    console.log(this.screenHeight);
    this.paySubmit();
  },
  methods: {
    paySubmit() {
      this.axios
        .post("/pay", {
          orderId: this.orderId,
          orderName: "Vue学习",
          amount: 0.01,
          payType: 1 // 1支付宝 2 微信
        })
        .then(res => {
          this.content = res.content;
          // 触发支付宝表单
          setTimeout(() => {
            document.forms[0].submit();
          }, 100);
        });
    }
  }
};
</script>

<style lang="scss"></style>
