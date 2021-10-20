import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'SuggestionSlider',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  data () {
    const self = this
    return {
      timeoutAutoChangeSlide: null,
      activeSlideIdx: 0,
      lockAutoplay: false,
      autoplay: true,
      // Позже будут данные с БД
      swiperOption: {
        slidesPerView: 1,
        centeredSlides: true,
        autoplay: {
          delay: 5000
        },
        loop: true,
        breakpoints: {
          1440: {
            slidesPerView: 'auto',
            slidesOffsetBefore: -60,
            loopedSlides: 2
          },
          1680: {
            slidesPerView: 'auto',
            slidesOffsetBefore: -110,
            loopedSlides: 2
          },
          1920: {
            slidesPerView: 'auto',
            slidesOffsetBefore: -60,
            loopedSlides: 2
          }
        },
        pagination: {
          el: '.js-slider-suggestion-pagination'
        },
        on: {
          slideChangeTransitionEnd () {
            self.activeSlideIdx = this.realIndex
          }
        }
      }
    }
  },
  computed: {
    slider () {
      return this.$refs.slider.$swiper
    }
  },
  methods: {
    stopAutoplay () {
      if (this.slider.autoplay) {
        this.slider.autoplay.stop()
        this.autoplay = false
      }
    },
    startAutoplay () {
      this.slider.autoplay.start()
      this.autoplay = true
    },
    changeSlide () {
      const self = this
      this.stopAutoplay()

      if (this.timeoutAutoChangeSlide) {
        clearTimeout(this.timeoutAutoChangeSlide)
      }

      setTimeout(() => {
        self.startAutoplay()
      }, 5000)
    },
    nextSlide () {
      this.slider.slideNext()
      this.changeSlide()
    },
    prevSlide () {
      this.slider.slidePrev()
      this.changeSlide()
    },
    enterSlider () {
      if (this.autoplay) {
        this.stopAutoplay()
      }
    },
    leaveSlider () {
      if (!this.autoplay && !this.lockAutoplay) {
        this.startAutoplay()
      }
    }
  }
}
