export default {
  data () {
    return {
      valueSelect: 'Ваши фамилия и номер',
      optionsSelect: ['Ваши фамилия и номер', '5 — Нойштедтер'],
      lastname: '',
      number: '',
      isOpen: false,
      logos: [
        {
          img: require('~/assets/image/detail-cart/logo1.png'),
          id: 0,
          isAdded: false
        },
        {
          img: require('~/assets/image/detail-cart/logo2.png'),
          id: 1,
          isAdded: false
        },
        {
          img: require('~/assets/image/detail-cart/logo3.png'),
          id: 2,
          isAdded: false
        },
        {
          img: require('~/assets/image/detail-cart/logo4.png'),
          id: 3,
          isAdded: false
        },
        {
          img: require('~/assets/image/detail-cart/logo5.png'),
          id: 4,
          isAdded: false
        }
      ]
    }
  },
  computed: {
    userName () {
      // Определяем пользователь указывает фамилию или выбрана из списка игроков
      return this.valueSelect === 'Ваши фамилия и номер'
    },
    logoPrice () {
      let count = 0
      this.logos.forEach((item) => {
        if (item.isAdded) {
          count++
        }
      })
      return count * 400
    }
  },
  watch: {
    number (value) {
      if (value > 99) {
        this.number = 99
      }
    }
  },
  methods: {
    toggleOpen () {
      this.isOpen = !this.isOpen
    },
    changeAddLogo (idx) {
      this.logos[idx].isAdded = !this.logos[idx].isAdded
    }
  }
}
