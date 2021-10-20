const QuoteImageCard = () => import('~/components/image-card-component/QuoteImageCart/QuoteImageCart.vue')
const TheProductCart = () => import('~/components/TheProductCart/TheProductCart.vue')
const ImageCartSlider = () => import('~/components/image-card-component/ImageCartSlider/ImageCartSlider.vue')

export default {
  components: { QuoteImageCard, TheProductCart, ImageCartSlider },
  props: {
    photoUrl: {
      type: String,
      required: true
    },
    photoTitle: {
      type: String,
      required: true
    },
    quote: {
      type: Object,
      required: true
    },
    productCarts: {
      type: Array,
      default: []
    },
    isBlockMirror: {
      type: Boolean
    }
  },
  data () {
    return {
      device: null
    }
  },
  mounted () {
    const windowWidth = window.screen.width
    if (windowWidth < 768) {
      this.device = 'mobile'
    } else if (windowWidth <= 1024) {
      this.device = 'tablet'
    } else if (windowWidth <= 1366) {
      this.device = 'laptop'
    } else {
      this.device = 'desktop'
    }
  }
}
