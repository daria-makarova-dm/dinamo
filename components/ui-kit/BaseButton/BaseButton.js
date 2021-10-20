const CloseIcon = () => import('~/components/Icons/CloseIcon/CloseIcon.vue')

export default {
  components: { CloseIcon },
  props: {
    type: {
      type: String,
      required: false,
      default: 'button'
    },
    to: {
      type: String,
      required: false,
      default: '/'
    },
    mode: {
      type: String,
      required: false,
      default: ''
    }
  }
}
