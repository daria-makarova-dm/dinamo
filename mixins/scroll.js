/* eslint-disable no-console */
export default {
  data () {
    return {
      scrollTop: 0
    }
  },
  methods: {
    scrolled () {
      const html = document.querySelector('html')
      if (html) {
        this.scrollTop = html.scrollTop
      }
    },
    scrollOn () {
      this.scrolled()
      document.addEventListener('scroll', this.scrolled, false)
    },
    scrollOff () {
      document.removeEventListener('scroll', this.scrolled, false)
    }
  },
  beforeDestroy () {
    if (process.browser) {
      this.scrollOff()
    }
  },
  mounted () {
    if (process.browser) {
      this.$nextTick(this.scrollOn)
    }
  }
}
