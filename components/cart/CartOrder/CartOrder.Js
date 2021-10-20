export default {
  data () {
    return {
      promo: '',
      rightPromo: false
    }
  },
  computed: {
    sumPriceProduct () {
      return `${this.$store.getters['cart/allCountMessage']} ${this.$t('basket.order.sum')}`
    },
    allPrice () {
      return this.$store.getters['cart/allPrice']
    },
    discountPrice () {
      return this.$store.getters['cart/allDiscountPrice']
    },
    finalPrice () {
      return this.$store.getters['cart/finalPrice']
    }
  },
  methods: {
    checkPromo () {
      const promos = this.$store.state.cart.promocodes
      for (const code of promos) {
        if (this.promo === code) {
          this.rightPromo = true
          break
        } else {
          this.rightPromo = false
        }
      }
    },
    resetPromoInput () {
      this.promo = ''
      this.rightPromo = false
    }
  }
}
