import { required, email, maxLength, minLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      city: '',
      cityTimeout: null
    }
  },
  validations: {
    firstname: { required, maxLength: maxLength(40), minLength: minLength(3) },
    lastname: { required, maxLength: maxLength(40), minLength: minLength(3) },
    email: { required, email, maxLength: maxLength(40) },
    phone: { required, minLength: minLength(16) }
  },
  computed: {
    cityIsValid () {
      if (!this.$store.state.order.userData.btnIsClick) {
        return true
      }
      return this.$store.state.order.targetCity
    },
    firstNameIsValid () {
      if (!this.$v.firstname.$dirty) {
        return true
      }
      return !this.$v.firstname.$invalid
    },
    lastNameIsValid () {
      if (!this.$v.lastname.$dirty) {
        return true
      }
      return !this.$v.lastname.$invalid
    },
    emailIsValid () {
      if (!this.$v.email.$dirty) {
        return true
      }
      return !this.$v.email.$invalid
    },
    phoneIsValid () {
      if (!this.$v.phone.$dirty) {
        return true
      }
      return !this.$v.phone.$invalid
    },
    btnIsClick () {
      return this.$store.state.order.userData.btnIsClick
    },
    cityResult () {
      return this.$store.state.order.cityResult
    },
    targetCity () {
      return this.$store.state.order.targetCity
    }
  },
  watch: {
    btnIsClick (newValue) {
      if (newValue) {
        this.$v.$touch()
      }
    }
  },
  methods: {
    changeDirty (name) {
      this.$v[name].$touch()
    },
    changeData (e, name) {
      const value = e.target.value
      this.$store.commit('order/changeData', {
        name,
        value,
        obj: 'userData'
      })

      if (!this.$v.$invalid) {
        this.$store.commit('order/changeValidData', {
          isValid: true,
          obj: 'userData'
        })
      } else {
        this.$store.commit('order/changeValidData', {
          isValid: false,
          obj: 'userData'
        })
      }
    },
    searchCity (e) {
      if (this.cityTimeout) {
        clearTimeout(this.cityTimeout)
      }

      this.cityTimeout = setTimeout(() => {
        try {
          this.$store.dispatch('order/fetchCity', e.target.value)
        } catch (e) {}
      }, 1000)
    },
    chooseCity (target) {
      // Выбираем город и записываем в стор
      this.$store.commit('order/chooseCity', target)
      // Читстим список городов
      this.$store.dispatch('order/fetchCity', '')
    },
    changeCity () {
      this.$store.commit('order/chooseCity', null)
      this.city = ''
    }
  },
  created () {
    const currentUserData = this.$store.state.order.userData
    this.firstname = currentUserData.firstname
    this.lastname = currentUserData.lastname
    this.phone = currentUserData.phone
    this.email = currentUserData.email

    if (this.$store.state.order.userData.btnIsClick) {
      this.$v.$touch()
    }
  },
  beforeDestroy () {
    // Очищаем рузельтат поиска городов
    this.$store.dispatch('order/fetchCity', '')
  }
}
