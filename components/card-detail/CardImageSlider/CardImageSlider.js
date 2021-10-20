import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: { Swiper, SwiperSlide },
  inject: ['arrImages'],
  data () {
    return {
      swiperOption: {
        spaceBetween: 0,
        slidesPerView: 'auto',
        pagination: {
          el: '.js-card-image-slider-pagination'
        }
      }
    }
  }
}
