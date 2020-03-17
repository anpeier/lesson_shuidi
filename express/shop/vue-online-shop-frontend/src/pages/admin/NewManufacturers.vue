<template>
  <manufacturer-form
    @save-manufacturer="addManufacturer"
    :model="model"
  >
  </manufacturer-form>
</template>

<script>
import ManufacturerForm from '@/components/ManufacturerForm.vue';
export default {
  computed: {
    model() {
      return {};
    }
  },
  methods: {
    addManufacturer(model) {
      this.$store.dispatch('addManufacturer', {
        manufacturer: model,
      }).then(() => {
        this.$router.push('/admin/manufacturers')
      })
    },
  },
  components: {
  'manufacturer-form': ManufacturerForm
  }
}
</script>
