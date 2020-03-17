<template>
  <manufacturer-form
    @save-manufacturer="addManufacturer"
    :model="model"
    :isEditing="true"
  >
  </manufacturer-form>
</template>

<script>
import ManufacturerForm from '@/components/ManufacturerForm.vue';
export default {
  created() {
    this.$store.dispatch('manufacturerById', {
      manufacturerId: this.$route.params['id']
    });
    console.log('aa')
  },
  computed: {
    model() {
      const manufacturer = this.$store.getters.manufacturerById(this.$route.params['id']);

    // 返回manufacturer的拷贝，是为了在修改manufacturer的拷贝之后，在保存之前不修改本地 store中的manufacturer属性
      return { ...manufacturer };
    }
  },
  methods: {
    addManufacturer(model) {
      this.$store.dispatch('updateManufacturer', {
        manufacturer: model,
      })
    },
  },
  components: {
  'manufacturer-form': ManufacturerForm
  }
}
</script>
