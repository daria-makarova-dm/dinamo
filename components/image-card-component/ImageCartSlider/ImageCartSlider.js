import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
const TheProductCart = () => import('~/components/TheProductCart/TheProductCart.vue')
const ArrowIcon = () => import('~/components/Icons/ArrowIcon/ArrowIcon.vue')

export default {
  components: { Swiper, SwiperSlide, TheProductCart, ArrowIcon },
  props: {
    productCarts: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      swiperOption: {
        spaceBetween: 0,
        slidesPerView: 2,
        navigation: {
          nextEl: '.image-cart-slider__btn-next',
          prevEl: '.image-cart-slider__btn-prev'
        },
        breakpoints: {
          960: {
            slidesPerView: 3
          },
          1280: {
            slidesPerView: 2
          },
          1920: {
            slidesPerView: 3
          }
        }
      }
    }
  }
}
