<template>
  <product-form
    @save-product="addProduct"
    :model="model"
    :manufacturers="manufacturers"
  >
  </product-form>
</template>

<script>
import ProductForm from '@/components/products/ProductForm.vue';
export default {
  created() {
    if (this.manufacturers.length === 0) {
      this.$store.dispatch('allManufacturers');
    }
  },
  computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers;
    },
    model() {
      return {};
    }
  },
  methods: {
    addProduct(model) {
      console.log(this.model)
      this.$store.dispatch('addProduct', {
        product: model,
      }).then(() => {
        this.$router.push('/admin')
      })
    },
  },
  components: {
  'product-form': ProductForm
  }
}
</script>
