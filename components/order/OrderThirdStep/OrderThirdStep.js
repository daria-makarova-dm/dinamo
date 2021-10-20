const ThirdStepCourier = () => import('~/components/order/ThirdStepCourier/ThirdStepCourier.vue')
const ThirdStepPickup = () => import('~/components/order/ThirdStepPickup/ThirdStepPickup.vue')
const ThirdStepMail = () => import('~/components/order/ThirdStepMail/ThirdStepMail.vue')

export default {
  components: { ThirdStepCourier, ThirdStepPickup, ThirdStepMail },
  computed: {
    mode () {
      return this.$store.state.order.delivery.type
    }
  },
  created () {
    this.$store.commit('order/changeValidData', {
      isValid: false,
      obj: 'addressData'
    })

    this.$store.commit('order/changeValidData', {
      isValid: false,
      obj: 'mailData'
    })
  }
}
