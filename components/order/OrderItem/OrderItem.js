import resize from '~/mixins/resize'

export default {
  mixins: [resize],
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
