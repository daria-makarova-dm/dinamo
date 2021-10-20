export default {
  data () {
    return {
      delivery: [
        {
          id: 'courier',
          title: 'Курьером',
          time: 'В любой удобный для вас день',
          when: 'Завтра',
          price: 'Бесплатно'
        },
        {
          id: 'pickup',
          title: 'Самовывозом',
          time: 'Когда удобно',
          when: 'Завтра',
          price: 'Бесплатно'
        },
        {
          id: 'mail',
          title: 'Почтой',
          time: 'В ближайшее отделение',
          when: 'Завтра',
          price: 'Бесплатно'
        }
      ]
    }
  },
  computed: {
    deliveryType () {
      return this.$store.state.order.delivery.type
    }
  },
  methods: {
    changeDeliveryType (type) {
      this.$store.commit('order/changeDeliveryType', type)
    }
  }
}
