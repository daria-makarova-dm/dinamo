<template lang="pug">
  include PromotionItem
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import CardDetailShareSocial from '~/components/card-detail/CardDetailShareSocial/CardDetailShareSocial'
import Video from '~/components/Video/Video'

export default {
  components: { CardDetailShareSocial, Video, Swiper, SwiperSlide },
  data () {
    return {
      activeSlideIdx: 0,
      myMap: null,
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        lazy: { loadPrevNext: true },
        loop: true,
        loopedSlides: 2,
        spaceBetween: 10,
        navigation: {
          nextEl: '.content__slider-btn-next',
          prevEl: '.content__slider-btn-next'
        },
        breakpoints: {
          768: {
            slidesPerView: 'auto',
            spaceBetween: 80
          },
          1440: {
            slidesPerView: 'auto',
            spaceBetween: 80,
            loopedSlides: 2
          },
          1680: {
            slidesPerView: 'auto',
            spaceBetween: 80,
            loopedSlides: 2
          },
          1920: {
            slidesPerView: 'auto',
            spaceBetween: 80,
            loopedSlides: 2
          }
        },
        on: {
          slideChangeTransitionEnd () {
            self.activeSlideIdx = this.realIndex
          }
        }
      },
      promoCard: {
        id: 1,
        start: '29 мар 2021',
        end: '29 апр 2021',
        url: require('~/assets/image/preview-second-catalog.png'),
        title: 'Скидка на все спортивные костюмы и олимпийки от 20 до 40%',
        preview: 'Скидка на все спортивные костюмы и олимпийки от 20 до 40%',
        description: 'В пятницу, 12 июня, главный тренер московского «Динамо» Кирилл Александрович Новиков успешно сдал экзамен на получение тренерской лицензии высшей категории — PRO.'
      },
      pictureImg: require('~/assets/image/preview-second-catalog.png'),
      videoSrc: require('~/assets/videos/rabbit.mp4'),
      sliderPictures: [
        {
          imgUrl: require('~/assets/image/preview-second-catalog.png'),
          imgDescr: 'Местная команда могла взять титул впервые с 1991 года',
          imgAuthor: 'Источник: Пресс-служба'
        },
        {
          imgUrl: require('~/assets/image/preview-second-catalog.png'),
          imgDescr: 'Местная команда могла взять титул впервые с 1991 года',
          imgAuthor: 'Источник: РБК'
        },
        {
          imgUrl: require('~/assets/image/preview-second-catalog.png'),
          imgDescr: 'Местная команда могла взять титул впервые с 1991 года',
          imgAuthor: 'Источник: Пятый канал'
        },
        {
          imgSrc: require('~/assets/image/preview-second-catalog.png'),
          imgDescr: 'Местная команда могла взять титул впервые с 1991 года',
          imgAuthor: 'Источник: Первый канал'
        }
      ],
      addresses: [
        {
          city: 'Москва',
          address: 'Большая Якиманка, 22',
          shop: 'ТЦ «Гименей», 2 этаж',
          workdays: 'пн-вс',
          worktime: '10:00–22:00',
          phone: '+7 (495) 999-99-99',
          latitude: '55.46368',
          longitude: '37.28368'
        },
        {
          city: 'Санкт-Петербург',
          address: 'Садовая, 35',
          shop: 'ТЦ «Гименей», 2 этаж',
          workdays: 'пн-вс',
          worktime: '10:00–22:00',
          phone: '+7 (495) 999-99-99',
          latitude: '59.53435',
          longitude: '30.19070'
        },
        {
          city: 'Екатеринбург',
          address: 'Садовая, 35',
          shop: 'ТЦ «Гименей», 2 этаж',
          workdays: 'пн-вс',
          worktime: '10:00–22:00',
          phone: '+7 (495) 999-99-99',
          latitude: '56.49450',
          longitude: '60.35243'
        }
      ]
    }
  },
  computed: {
    markers () {
      const shopPlaces = []
      this.addresses.forEach((item) => {
        shopPlaces.push({ lat: item.latitude, lng: item.longitude })
      })
      const arrMarkers = []
      shopPlaces.forEach((item) => {
        const objMarker = {
          location: {
            lat: +item.lat,
            lng: +item.lng
          }
        }
        arrMarkers.push(objMarker)
      })
      return arrMarkers
    }
  },
  methods: {
    nextSlide () {
      this.slider.slideNext()
    },
    prevSlide () {
      this.slider.slidePrev()
    }
  }
  // props: {
  //   promoCard: {
  //     type: Object,
  //     required: true
  //   }
  // }
}
</script>

<style lang="scss">
  @import "PromotionItem";
</style>
