export default {
  props: {
    promotionDateStart: {
      type: String,
      required: true
    },
    promotionDateEnd: {
      type: String,
      required: true
    },
    promotionLink: {
      type: String,
      required: true
    },
    promotionTitle: {
      type: Object,
      required: true
    },
    promotionDescr: {
      type: String
    },
    promotionPhoto: {
      type: String
    }
  }
}
