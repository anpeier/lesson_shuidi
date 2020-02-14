// components/bottom-model/bottom-modal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    modalShow: Boolean
  },

  options: {
    // 解决组件内部样式隔离
    styleIsolation: 'apply-shared',
    multipleSlots: true, // 具名插槽的声明
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClose() {
      this.setData({
        modalShow: false,
      })
    },
  }
})
