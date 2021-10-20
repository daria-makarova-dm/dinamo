export default {
  computed: {
    step () {
      return this.$store.state.order.step
    },
    isCart () {
      return this.step === 1
    },
    isPyament () {
      return this.step === 5 || this.step === 6
    },
    scoped () {
      return this.$store
    }
  },
  methods: {
    nextstep () {
      // Если кликаем по кнопке перехода с первого шага
      if (this.step === 1) {
        // Запоминаем клик по кнопке
        this.$store.commit('order/changeBtnClickedData', {
          btnIsClick: true,
          obj: 'userData'
        })
        // Если форма не валидна, то не идём дальше
        if (!this.$store.state.order.userData.isValid || !this.$store.state.order.targetCity) {
          return
        }
      }

      if (this.step === 3) {
        if (this.$store.state.order.delivery.type === 'courier') {
          // Запоминаем клик по кнопке
          this.$store.commit('order/changeBtnClickedData', {
            btnIsClick: true,
            obj: 'addressData'
          })
          // Если форма не валидна, то не идём дальше
          if (!this.$store.state.order.addressData.isValid) {
            return
          }
        }

        if (this.$store.state.order.delivery.type === 'pickup') {
          if (!this.$store.state.order.targetPickupPoint) {
            return
          }
        }

        if (this.$store.state.order.delivery.type === 'mail') {
          // Запоминаем клик по кнопке
          this.$store.commit('order/changeBtnClickedData', {
            btnIsClick: true,
            obj: 'mailData'
          })

          if (!this.$store.state.order.mailData.isValid) {
            return
          }
        }
      }

      if (this.step >= 6) {
        return
      }

      this.$store.dispatch('order/nextstep')
    },
    backstep () {
      this.$store.dispatch('order/backstep')
    }
  }
}
