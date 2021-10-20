const CartItem = () => import('~/components/cart/CartItem/CartItem.vue')

export default {
  components: { CartItem },
  emit: ['close-modal'],
  computed: {
    removeMessage () {
      return this.$store.getters['cart/removeAllMessage']
    },
    arrProduct () {
      return this.$store.getters['cart/arrProduct']
    }
  },
  methods: {
    closeModal () {
      this.$emit('close-modal')
    },
    clearCart () {
      this.$store.commit('cart/clearCart')
      this.closeModal()
    }
  }
}
