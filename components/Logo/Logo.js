export default {
  props: {
    urlImage: {
      type: String,
      required: true
    },
    urlImgBig: {
      type: [String, Boolean],
      default: false,
      required: false
    },
    logoLink: {
      type: String,
      required: true
    }
  }
}
