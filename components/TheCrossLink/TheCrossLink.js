// В качестве type можно передать значение half (карточка будет занимать половину) и rub (будет занимать треть),
// по умолчанию стоит half

const ArrowIcon = () => import('~/components/Icons/ArrowIcon/ArrowIcon.vue')

export default {
  components: { ArrowIcon },
  props: {
    link: {
      type: String,
      required: true
    },
    srcImage: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'half'
    }
  },
  computed: {
    classType () {
      let className = null
      if (this.type === 'half') {
        className = 'cross-link--half'
      } else if (this.type === 'rub') {
        className = 'cross-link--rub'
      }

      return className
    }
  }
}
