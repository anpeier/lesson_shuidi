<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{product.title}} - {{product.price}}
        <br />
        <button @click="addProductToCart(product)">addToCart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  created() {
    this.$store.dispatch("products/getAllProducts");
  },
  computed: mapState({
    products: state => state.products.all
  }),
  methods: mapActions("cart", [
    // 对应命名空间
    "addProductToCart"
  ])
};
</script>

<style>
</style>