export default {
  inject: ['arrImages'],
  data () {
    return {
      activeIdxImg: 0
    }
  },
  computed: {
    slider () {
      return this.$refs.cardImageVerticalSlider
    }
  },
  mounted () {
    const parentRefsObj = this.$parent.$refs
    let totalBlocksHeight = 0
    const imageTabCardDetailVerticalSlider = this.$refs.imageTabCardDetailVerticalSlider
    imageTabCardDetailVerticalSlider.style.maxHeight = '0'
    const parentRefs = Object.values(parentRefsObj)
    for (const block of parentRefs) {
      totalBlocksHeight += block.offsetHeight
    }
    imageTabCardDetailVerticalSlider.style.maxHeight = `${totalBlocksHeight}px`
  },
  methods: {
    changeActiveImg (idx) {
      this.activeIdxImg = idx
      const slider = this.$refs.imageTabCardDetailVerticalSlider
      const sliderTopOffset = this.$refs.imageTabCardDetailVerticalSlider.getBoundingClientRect().top
      const currentImage = document.querySelector(`[data-index="${idx}"]`)
      const currentImageTopOffset = currentImage.getBoundingClientRect().top
      slider.scrollBy({
        top: currentImageTopOffset - sliderTopOffset,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
