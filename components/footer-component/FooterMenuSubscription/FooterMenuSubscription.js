import { required, email, maxLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      email: '',
      valid: false,
      checkbox: false,
      radio: false
    }
  },
  validations: {
    email: { required, email, maxLength: maxLength(120) }
  },
  computed: {
    checkValidEmail () {
      return this.$v.email.email && this.$v.email.required && this.$v.email.maxLength
    },
    formData () {
      return this.$t('footer.form')
    }
  },
  // watch: {
  //   radio (nex) {
  //     console.log(nex)
  //   }
  // },
  methods: {
    submitForm (e) {
      if (this.checkValidEmail && this.checkbox) {
        // console.log('Форма отправлена')
        this.valid = true
        // Дописать функционал условия сообщения после того, как начнёт работать бэк
        e.preventDefault()
      } else {
        // console.log('Форма не прошла валидацию')
        e.preventDefault()
      }
    }
  }
}
