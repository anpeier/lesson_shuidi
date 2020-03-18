<template>
  <div>
    <hr />
    <div>
      <h2>your cart</h2>
      <p v-show="!products.length">please add to cart</p>
      <ul>
        <li
          v-for="item in products"
          :key="item.id"
        >{{item.id}} - {{item.title}} - {{item.price}} - {{item.inventory}}</li>
      </ul>
      <p>{{total}}</p>
      <p>
        <button :disabled="!products.length" @click="checkout(products)">checkout</button>
      </p>
      <p v-show="checkoutStatus">checkout {{checkoutStatus}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters("cart", {
      products: "cartProducts",
      total: "cartTotalPrice"
    })
  },
  methods: {
    checkout(products) {
      this.$store.dispatch("cart/checkout", products);
    }
  }
};
</script>

<style>
</style>