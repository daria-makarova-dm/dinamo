export default {
  data () {
    return {
      value: 'Картой онлайн',
      ways: ['Картой онлайн', 'Наличными при получении', 'Картой при получении', 'Apple Pay', 'Google Pay'],
      comment: ''
    }
  },
  methods: {
    changeWayPayment (value) {
      this.$store.commit('order/changeWayPayment', value)
    },
    changeComment (e) {
      const value = e.target.value
      this.$store.commit('order/changeComment', value)
    }
  },
  created () {
    this.value = this.$store.state.order.wayPayment
    this.comment = this.$store.state.order.comment
  }
}
