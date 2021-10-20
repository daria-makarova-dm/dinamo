import TheProductCart from '~/components/TheProductCart/TheProductCart.vue'
import ArrowIcon from '~/components/Icons/ArrowIcon/ArrowIcon.vue'

export default {
  components: { TheProductCart, ArrowIcon },
  props: {
    title: {
      type: String,
      required: true
    },
    arrProduct: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      device: null,
      countVisibleCart: 0
    }
  },
  computed: {
    countHiddenCart () {
      if (this.arrProduct) {
        return this.arrProduct.length - this.countVisibleCart
      }
      return 0
    },
    checkHiddenCart () {
      if (this.arrProduct) {
        return this.arrProduct.length - this.countVisibleCart > 0
      }
      return false
    }
  },
  mounted () {
    const windowWidth = window.screen.width

    if (windowWidth < 768) {
      this.device = 'mobile'
      this.countVisibleCart = 4
    } else if (windowWidth <= 1024) {
      this.device = 'tablet'
      this.countVisibleCart = 3
    } else if (windowWidth <= 1366) {
      this.device = 'laptop'
      this.countVisibleCart = 4
    } else {
      this.device = 'desktop'
      this.countVisibleCart = 5
    }
  }
}
