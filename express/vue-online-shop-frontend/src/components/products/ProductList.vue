<template>
  <div>
    <div class="products">
      <div class="container">This is ProductList</div>
      <template v-for="product in products">
        <product-item :product="product" :key="product._id"></product-item>
      </template>
    </div>
  </div>
</template>

<style>
.product {
  border-bottom: 1px solid black;
}

.product__image {
  width: 100px;
  height: 100px;
}
</style>

<script>
import ProductItem from './ProductItem'
export default {
  name: "product-list",
  components: {
    ProductItem
  },
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch('allProducts')
    }
  },
  computed: {
    // a computed getter
    products() {
      // return this.$store.state.products;
      return this.$store.getters.allProducts;
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit("ADD_TO_CART", {
        product
      });
    }
  }
};
</script>
