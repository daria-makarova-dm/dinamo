import { required, minLength, maxLength, numeric } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      address: '',
      home: '',
      housing: '',
      structure: '',
      flat: '',
      index: ''
    }
  },
  validations: {
    address: { required },
    home: { required, maxLength: maxLength(4), numeric },
    housing: { required, maxLength: maxLength(3), numeric },
    structure: { required, maxLength: maxLength(3), numeric },
    flat: { required, maxLength: maxLength(5), numeric },
    index: { required, maxLength: maxLength(6), minLength: minLength(6), numeric }
  },
  watch: {
    btnIsClick (value) {
      if (value) {
        this.allDirty()
      }
    }
  },
  computed: {
    btnIsClick () {
      return this.$store.state.order.mailData.btnIsClick
    },
    addressIsValid () {
      if (!this.$v.address.$dirty) {
        return true
      }
      return !this.$v.address.$invalid
    },
    homeIsValid () {
      if (!this.$v.home.$dirty) {
        return true
      }
      return !this.$v.home.$invalid
    },
    housingIsValid () {
      if (!this.$v.housing.$dirty) {
        return true
      }
      return !this.$v.housing.$invalid
    },
    structureIsValid () {
      if (!this.$v.structure.$dirty) {
        return true
      }
      return !this.$v.structure.$invalid
    },
    flatIsValid () {
      if (!this.$v.flat.$dirty) {
        return true
      }
      return !this.$v.flat.$invalid
    },
    indexIsValid () {
      if (!this.$v.index.$dirty) {
        return true
      }
      return !this.$v.index.$invalid
    }
  },
  methods: {
    allDirty () {
      this.$v.$touch()
    },
    changeDirty (input) {
      this.$v[input].$touch()
    },
    changeData (e, input) {
      const value = e.target.value
      this.$store.commit('order/changeData', {
        obj: 'mailData',
        name: input,
        value
      })

      if (!this.$v.$invalid) {
        this.$store.commit('order/changeValidData', {
          isValid: true,
          obj: 'mailData'
        })
      } else {
        this.$store.commit('order/changeValidData', {
          isValid: false,
          obj: 'mailData'
        })
      }
    }
  },
  created () {
    const mailData = this.$store.state.order.mailData
    this.address = mailData.address
    this.flat = mailData.flat
    this.entrance = mailData.entrance
    this.intercom = mailData.intercom
    this.floor = mailData.floor
    this.valueDaySelect = mailData.valueDaySelect
    this.valueTimeSelect = mailData.valueTimeSelect

    if (mailData.btnIsClick) {
      this.$v.$touch()
    }
  }
}
