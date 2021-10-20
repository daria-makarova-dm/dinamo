/* eslint-disable no-console */
export default {
  props: {
    currentStep: {
      type: Number,
      default: 1
    },
    showTo: {
      type: Number,
      default: 12
    },
    length: {
      type: Number,
      default: 17
    }
  },
  data () {
    return {
      inCurrentStep: this.currentStep,
      inShowTo: this.showTo,
      inLength: this.length,
      inOffset: this.showTo * this.currentStep
    }
  },
  computed: {
    getInOffset () {
      return this.inOffset > this.inLength ? this.inLength : this.inOffset
    },
    showMoreBtn () {
      return this.inOffset < this.inLength
    }
  },
  methods: {
    resetShowMore () {
      this.inCurrentStep = this.currentStep
      this.inOffset = this.showTo * this.currentStep
    }
  }
}
