// Mixins
import resize from '~/mixins/resize'

// Components
const OrderItem = () => import('~/components/order/OrderItem/OrderItem.vue')

export default {
  components: { OrderItem },
  mixins: [resize],
  computed: {
    arrProduct () {
      return this.$store.state.cart.arrProduct
    },
    orderData () {
      return this.$store.state.order
    },
    total () {
      const allPrice = this.$store.getters['cart/allPrice']
      const scores = this.orderData.usedScores
      const certificate = this.orderData.certificate ? this.$store.state.order.certificate.value : 0
      return allPrice - scores - certificate
    },
    fullName () {
      return `${this.orderData.userData.firstname} ${this.orderData.userData.lastname}`
    },
    deliveryObj () {
      if (this.orderData.delivery.type === 'courier') {
        return { ...this.orderData.addressData, title: 'Доставка курьером' }
      }

      if (this.orderData.delivery.type === 'pickup') {
        return { ...this.orderData.targetPickupPoint, title: 'Самовывозом' }
      }

      if (this.orderData.delivery.type === 'mail') {
        return { ...this.orderData.mailData, title: 'Доставка на почту' }
      }
    }
  }
}
