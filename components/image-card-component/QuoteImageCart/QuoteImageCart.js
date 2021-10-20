export default {
  props: {
    quote: {
      type: Object,
      required: true
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
