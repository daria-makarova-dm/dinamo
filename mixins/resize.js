// Миксин для определения разрешения экрана
export default {
  data () {
    return {
      resWidth: 0
    }
  },
  computed: {
    mobile () {
      return this.resWidth >= 320 && this.resWidth < 768
    },
    table () {
      return this.resWidth >= 768 && this.resWidth < 1024
    },
    desktop () {
      return this.resWidth >= 1024
    }
  },
  methods: {
    resized () {
      this.resWidth = window.innerWidth
    },
    resizedOn () {
      this.resized()
      window.addEventListener('resize', this.resized, false)
    },
    resizedOff () {
      window.removeEventListener('resize', this.resized, false)
    }
  },
  beforeDestroy () {
    if (process.browser) {
      this.resizedOff()
    }
  },
  created () {
    if (process.browser) {
      this.resizedOn()
    }
  }
}
