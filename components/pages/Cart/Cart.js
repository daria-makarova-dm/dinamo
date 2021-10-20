const EmptyCard = () => import('~/components/cart/EmptyCart/EmptyCart.vue')
const CartItem = () => import('~/components/cart/CartItem/CartItem.vue')
const ClearCart = () => import('~/components/cart/ClearCart/ClearCart.vue')
const CartOrder = () => import('~/components/cart/CartOrder/CartOrder.vue')

export default {
  components: { EmptyCard, CartItem, ClearCart, CartOrder },
  data () {
    return {
      clearModal: false
    }
  },
  computed: {
    checkProduct () {
      return Boolean(this.$store.getters['cart/arrProduct'].length)
    },
    arrProduct () {
      return this.$store.getters['cart/arrProduct']
    }
  },
  methods: {
    toggleClearModal (open) {
      this.clearModal = open
      this.$store.commit('changeNoScroll', {
        item: 'clearCart',
        bool: open
      })
    }
  }
}
