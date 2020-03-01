<template>
  <div>
    <order-header :title="title">
      <template v-slot:tips>
        <span>{{tip}}</span>
      </template>
    </order-header>
    <router-view />
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from "./../components/OrderHeader";
import NavFooter from "./../components/NavFooter";
import ServiceBar from "./../components/ServiceBar";
export default {
  name: "order",
  components: {
    OrderHeader,
    NavFooter,
    ServiceBar
  },
  data() {
    return {
      title: "",
      tip: ""
    };
  },
  mounted() {
    let path = this.$route.path;
    // console.log(path);
    if (path == "/order/confirm") {
      this.title = "订单确认";
      this.tip = "请确认订单详情及收货地址";
    } else if (path == "/order/list") {
      this.title = "订单列表";
      this.tip = "谨防钓鱼链接或诈骗电话，了解更多>";
    } else if (path == "/order/pay") {
      this.title = "订单支付";
      this.tip = "请确认商品信息及支付金额";
    }
  }
};
</script>

<style>
</style>