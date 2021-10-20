import { required, maxLength, numeric } from 'vuelidate/lib/validators'
import resize from '~/mixins/resize'

export default {
  mixins: [resize],
  data () {
    return {
      address: '',
      flat: '',
      entrance: '',
      intercom: '',
      floor: '',
      valueDaySelect: 'Воскресенье, 8 ноября',
      valueTimeSelect: 'С 10:00 до 22:00',
      searchCityOpen: false,
      daySelect: [
        'Воскресенье, 8 ноября',
        'Понедельник, 9 ноября',
        'Вторник, 10 ноября',
        'Среда, 11 ноября'
      ],
      timeSelect: [
        'С 10:00 до 22:00',
        'С 11:00 до 23:00',
        'С 12:00 до 00:00'
      ]
    }
  },
  validations: {
    address: { required },
    flat: { required, maxLength: maxLength(5), numeric },
    entrance: { maxLength: maxLength(3), numeric },
    intercom: { numeric },
    floor: { maxLength: maxLength(3), numeric }
  },
  computed: {
    btnIsClick () {
      return this.$store.state.order.addressData.btnIsClick
    },
    addressIsValid () {
      if (!this.$v.address.$dirty) {
        return true
      }
      return !this.$v.address.$invalid
    },
    flatIsValid () {
      if (!this.$v.flat.$dirty) {
        return true
      }
      return !this.$v.flat.$invalid
    },
    entranceIsValid () {
      if (!this.$v.entrance.$dirty) {
        return true
      }
      return !this.$v.entrance.$invalid
    },
    intercomIsValid () {
      if (!this.$v.intercom.$dirty) {
        return true
      }
      return !this.$v.intercom.$invalid
    },
    floorIsValid () {
      if (!this.$v.floor.$dirty) {
        return true
      }
      return !this.$v.floor.$invalid
    }
  },
  watch: {
    btnIsClick (value) {
      if (value) {
        this.allDirty()
      }
    }
  },
  methods: {
    allDirty () {
      this.$v.$touch()
    },
    changeData (e, input) {
      const value = e.target.value
      this.$store.commit('order/changeData', {
        obj: 'addressData',
        name: input,
        value
      })

      if (input === 'address') {
        this.searchAddress()
      }

      if (!this.$v.$invalid) {
        this.$store.commit('order/changeValidData', {
          isValid: true,
          obj: 'addressData'
        })
        console.log(this.$store.state.order)
      } else {
        this.$store.commit('order/changeValidData', {
          isValid: false,
          obj: 'addressData'
        })
      }
    },
    changeDirty (input) {
      this.$v[input].$touch()
    },
    chooseAddress (value) {
      this.address = value
      this.$store.commit('order/changeData', {
        obj: 'addressData',
        name: 'address',
        value
      })
      this.searchCityOpen = false
    },
    searchAddress () {
      if (this.streetTimeout) {
        clearTimeout(this.streetTimeout)
      }

      this.streetTimeout = setTimeout(() => {
        // Запрос на API
        this.streets = [
          'Саблинская, 17',
          'Саблинская, 18',
          'Саблинская, 19',
          'Саблинская, 20'
        ]

        this.searchCityOpen = true
      }, 1000)
    }
  },
  created () {
    const addressData = this.$store.state.order.addressData
    this.address = addressData.address
    this.flat = addressData.flat
    this.entrance = addressData.entrance
    this.intercom = addressData.intercom
    this.floor = addressData.floor
    this.valueDaySelect = addressData.valueDaySelect
    this.valueTimeSelect = addressData.valueTimeSelect

    if (addressData.btnIsClick) {
      this.$v.$touch()
    }
  }
}
