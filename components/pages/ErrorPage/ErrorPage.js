export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  computed: {
    errorMessage () {
      const code = this.error.statusCode
      if (code === 404) {
        return 'Ошибка 404: такой страницы не существует'
      }
      return this.error
    }
  }
}
