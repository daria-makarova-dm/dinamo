export default {
  data () {
    return {
      certificate: '',
      certificateIsAdd: false
    }
  },
  computed: {
    currentScoresValue () {
      return this.$store.state.order.usedScores
    },
    maxScoresValue () {
      const price = this.$store.getters['cart/allPrice']
      const max = Math.floor(price * 0.3)
      const scores = this.$store.state.user.scores

      if (max > scores) {
        return scores
      } else {
        return max
      }
    },
    useCertificate () {
      // Находим применённый сертификат в сторе
      return this.$store.state.order.certificate
    }
  },
  watch: {
    useCertificate (value) {
      if (value) {
        this.certificateIsAdd = true
      } else {
        this.certificateIsAdd = false
      }
    }
  },
  methods: {
    changeRange (value) {
      this.$store.commit('order/changeScoresValue', value)
    },
    checkCertificate (e) {
      const value = e.target.value
      const certificates = this.$store.state.user.certificates
      let targetCertificate = false
      certificates.forEach((item) => {
        if (value === item.name) {
          targetCertificate = item
        }
      })

      if (targetCertificate) {
        this.$store.commit('order/addCertificate', targetCertificate)
      } else {
        this.$store.commit('order/addCertificate', null)
      }
    },
    resetInput () {
      this.certificate = ''
    }
  },
  created () {
    const certificate = this.$store.state.order.certificate
    if (certificate) {
      this.certificateIsAdd = true
      this.certificate = certificate.name
    }
  }
}
