export default {
  props: {
    product: {
      type: Object,
      required: true
    },
    clearMode: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      showSize: false,
      showColors: false,
      removeModal: false
    }
  },
  computed: {
    bonusName () {
      if (this.product.bonus.value) {
        return this.product.bonus.name + ': '
      }

      return this.product.bonus.name
    },
    count () {
      return this.product.count
    },
    disabledDecrement () {
      const checkDecrementCount = this.product.maxCount === 1
      return { disabled: checkDecrementCount }
    },
    price () {
      return this.product.price.value * this.product.count
    },
    discount () {
      return this.product.price.discount * this.product.count
    }
  },
  methods: {
    toggleShowColorsOrSize (name) {
      if (name === 'color') {
        this.showColors = !this.showColors
      }

      if (name === 'size') {
        this.showSize = !this.showSize
      }
    },
    changeColorSize (countNewValue, nameObj) {
      // Передаём индекс элемента по которому кликаем и название массива в сторе
      this.$store.commit('cart/changeColorOrSize', {
        id: this.product.id,
        countNewValue,
        nameObj
      })
    },
    changeCount (action) {
      if (action) {
        this.$store.commit('cart/changeCount', {
          id: this.product.id,
          action
        })
      }
    },
    removeProduct () {
      this.$store.commit('cart/removeProduct', {
        id: this.product.id
      })
    },
    showRemoveModal () {
      this.removeModal = true
    },
    hiddenRemoveModal () {
      this.removeModal = false
    }
  }
}
