// mixins
import resize from '~/mixins/resize'

// Components
const OrderFirstStep = () => import('~/components/order/OrderFirstStep/OrderFirstStep.vue')
const OrderSecondStep = () => import('~/components/order/OrderSecondStep/OrderSecondStep.vue')
const OrderThirdStep = () => import('~/components/order/OrderThirdStep/OrderThirdStep.vue')
const OrderFourthStep = () => import('~/components/order/OrderFourthStep/OrderFourthStep.vue')
const OrderFifthStep = () => import('~/components/order/OrderFifthStep/OrderFifthStep.vue')
const OrderFinalStep = () => import('~/components/order/OrderFinalStep/OrderFinalStep.vue')
const StepControl = () => import('~/components/order/StepControl/StepControl.vue')

export default {
  mixins: [resize],
  data () {
    return {
      firstStepIsValid: false
    }
  },
  components: {
    OrderFirstStep,
    OrderSecondStep,
    OrderThirdStep,
    OrderFourthStep,
    OrderFifthStep,
    OrderFinalStep,
    StepControl
  },
  computed: {
    step () {
      return this.$store.state.order.step
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
    stepComponent () {
      if (this.step === 1) {
        return OrderFirstStep
      } else if (this.step === 2) {
        return OrderSecondStep
      } else if (this.step === 3) {
        return OrderThirdStep
      } else if (this.step === 4) {
        return OrderFourthStep
      } else if (this.step === 5) {
        return OrderFifthStep
      } else if (this.step === 6) {
        return OrderFinalStep
      }
    }
  }
}
