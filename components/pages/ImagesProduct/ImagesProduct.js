/* eslint-disable no-console */
import { mapGetters } from 'vuex'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import debounce from '../../../utils/debounce.js'
const TheProductCard = () => import('~/components/TheProductCart/TheProductCart.vue')
const TheCrossLink = () => import('~/components/TheCrossLink/TheCrossLink.vue')
const FavoriteBtn = () => import('~/components/FavoriteBtn/FavoriteBtn.vue')
const Breadcrumbs = () => import('~/components/Breadcrumbs/Breadcrumbs.vue')
const ImageTabCartDetail = () => import('~/components/card-detail/ImageTabCartDetail/ImageTabCartDetail.vue')
const CardDetailShareSocial = () => import('~/components/card-detail/CardDetailShareSocial/CardDetailShareSocial.vue')
const CardImageSlider = () => import('~/components/card-detail/CardImageSlider/CardImageSlider.vue')
const EmptyCard = () => import('~/components/EmptyCard/EmptyCard.vue')

export default {
  components: { TheCrossLink, TheProductCard, FavoriteBtn, Swiper, SwiperSlide, Breadcrumbs, ImageTabCartDetail, CardDetailShareSocial, CardImageSlider, EmptyCard },
  name: 'ImagesItem',
  async asyncData ({ route, store, $cookies }) {
    const slug = route.params.image
    const queryParams = ['sorting', 'shown']
    // eslint-disable-next-line no-unused-vars
    const filter = await store.dispatch('filter/fetch', {
      query: route.query,
      queryParams
    })
    console.log('$cookies: ', $cookies)
    const sort = await store.dispatch('sortFetch', route.query.sorting)
    const show = await store.dispatch('showFetch', route.query.shown)
    // TODO: карректировать параметры для catalog из url когда переходим
    const catalog = await store.dispatch('catalog/fetch', route.query)

    $cookies.set('shown', show.data.query)

    return {
      queryParams,
      showList: show.data.list,
      showValue: show.data.value,
      showParams: { shown: show.data.query },
      sortList: sort.data.list,
      sortValue: sort.data.value,
      sortParams: { sorting: sort.data.query },
      title: catalog.data.title,
      inLength: catalog.data.total,
      inShowTo: parseInt(show.data.value.value),
      cards: catalog.data.items,
      slug
    }
  },
  data () {
    return {
      objCardDescription: {
        title: 'Куртка утеплённая',
        price: 5990,
        discountPrice: 7990,
        bonusPrice: 'начислим До\u00A065\u00A0баллов',
        text: [
          'Мужская демисезонная куртка. Предназначена для повседневной носки и активного отдыха. Куртка прямого силуэта с втачным рукавом. В вертикальных рельефах переда расположены карманы на потайной молнии.',
          'Куртка изготовлена из полиэстера. Ткань обладает водонепроницаемыми и ветрозащитными свойствами. Благодаря свойствам материала, а также уникальной технологии производства, она служит надежной и теплой защитой от холода, дождя и снега. Наполнитель изготовлен из ультратонкого микроволокна, воздушный и устойчивый к деформациям.'
        ],
        list: [
          'Лёгкая, влагозащитная ткань;',
          'Боковые и внутренний карманы;',
          'Защитный ворот;',
          'Материал верха: 100% полиэстер;',
          'Материал наполнителя: искусственный пух из микроволокна;',
          'Производство: Россия.'
        ]
      },
      imageCards: [
        {
          id: 1,
          type: 'small',
          title: 'Коллекция домашней одежды',
          mainImageUrl: require('~/assets/image/preview-second-catalog.png'),
          mediaMaterials: {
            bigImage: require('~/assets/image/preview-second-catalog.png'),
            averageImage: '',
            smallImage: [
              require('~/assets/image/preview-second-catalog.png'),
              require('~/assets/image/preview-second-catalog.png'),
              require('~/assets/image/preview-second-catalog.png'),
              require('~/assets/image/preview-second-catalog.png')
            ]
          }
        },
        {
          id: 2,
          type: 'medium',
          title: 'Mizuno × Динамо Москва',
          mainImageUrl: require('~/assets/image/preview-second-catalog.png'),
          mediaMaterials: {
            bigImage: require('~/assets/image/preview-second-catalog.png'),
            averageImage: require('~/assets/image/preview-second-catalog.png'),
            smallImage: [
              require('~/assets/image/preview-second-catalog.png'),
              require('~/assets/image/preview-second-catalog.png'),
              require('~/assets/image/preview-second-catalog.png')
            ]
          }
        },
        {
          id: 3,
          type: 'big',
          title: 'Mizuno × Динамо Москва',
          mainImageUrl: require('~/assets/image/preview-second-catalog.png'),
          mediaMaterials: {
            bigImage: [
              require('~/assets/image/preview-second-catalog.png'),
              require('~/assets/image/preview-second-catalog.png')
            ]
          }
        }
      ],
      // swiperOptionTop: {
      //   loop: true,
      //   loopedSlides: 5, // looped slides should be the same
      //   spaceBetween: 10,
      //   navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev'
      //   }
      // },
      // swiperOptionThumbs: {
      //   loop: true,
      //   loopedSlides: 5, // looped slides should be the same
      //   spaceBetween: 10,
      //   centeredSlides: true,
      //   slidesPerView: 'auto',
      //   touchRatio: 0.2,
      //   slideToClickedSlide: true,
      //   direction: 'vertical',
      //   pagination: {
      //     el: '.swiper-pagination',
      //     clickable: true
      //   }
      // },
      // swiperOption: {
      //   slidesPerView: 1,
      //   centeredSlides: true,
      //   autoplay: {
      //     delay: 5000
      //   },
      //   loop: true,
      //   breakpoints: {
      //     1440: {
      //       slidesPerView: 'auto',
      //       slidesOffsetBefore: -60,
      //       loopedSlides: 2
      //     },
      //     1680: {
      //       slidesPerView: 'auto',
      //       slidesOffsetBefore: -110,
      //       loopedSlides: 2
      //     },
      //     1920: {
      //       slidesPerView: 'auto',
      //       slidesOffsetBefore: -60,
      //       loopedSlides: 2
      //     }
      //   },
      //   pagination: {
      //     el: '.js-slider-suggestion-pagination'
      //   },
      //   on: {
      //     slideChangeTransitionEnd () {
      //       self.activeSlideIdx = this.realIndex
      //     }
      //   }
      // },
      slides: [
        {
          imgUrl: require('~/assets/image/preview-second-catalog.png'),
          title: 'Футболка вратарская взрослая'
        },
        {
          imgUrl: require('~/assets/image/form.png'),
          title: 'Футболка вратарская взрослая'
        },
        {
          imgUrl: require('~/assets/image/preview-second-catalog.png'),
          title: 'Футболка вратарская взрослая'
        },
        {
          imgUrl: require('~/assets/image/form.png'),
          title: 'Футболка вратарская взрослая'
        },
        {
          imgUrl: require('~/assets/image/form.png'),
          title: 'Футболка вратарская взрослая'
        },
        {
          imgUrl: require('~/assets/image/preview-second-catalog.png'),
          title: 'Футболка вратарская взрослая'
        }
      ],
      timeId: null,
      slug: '',
      // productCarts: [
      //   {
      //     id: 32,
      //     productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
      //     favorite: false,
      //     title: 'Футболка вратарская взрослая',
      //     firm: 'Сезон 2020/2021',
      //     price: '5990'
      //   },
      //   {
      //     id: 37,
      //     productPreviewImg: require('~/assets/image/form.png'),
      //     favorite: false,
      //     title: 'Футболка вратарская взрослая',
      //     firm: 'Сезон 2020/2021',
      //     price: '5990'
      //   },
      //   {
      //     id: 320,
      //     productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
      //     favorite: false,
      //     title: 'Футболка вратарская взрослая',
      //     firm: 'Сезон 2020/2021',
      //     price: '5990'
      //   },
      //   {
      //     id: 632,
      //     productPreviewImg: require('~/assets/image/form.png'),
      //     favorite: false,
      //     title: 'Футболка вратарская взрослая',
      //     firm: 'Сезон 2020/2021',
      //     price: '5990'
      //   },
      //   {
      //     id: 372,
      //     productPreviewImg: require('~/assets/image/form.png'),
      //     favorite: false,
      //     title: 'Футболка вратарская взрослая',
      //     firm: 'Сезон 2020/2021',
      //     price: '5990'
      //   },
      //   {
      //     id: 321,
      //     productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
      //     favorite: false,
      //     title: 'Футболка вратарская взрослая',
      //     firm: 'Сезон 2020/2021',
      //     price: '5990'
      //   }
      // ],
      crossLinks: [
        {
          link: '/',
          srcImage: require('~/assets/image/preview-second-catalog.png'),
          title: 'Будущее наступило сегодня',
          type: 'half'
        },
        {
          link: '/',
          srcImage: require('~/assets/image/form.png'),
          title: 'Одежда на каждый день',
          type: 'half'
        }
      ],
      imageCart: {
        photoUrl: require('~/assets/image/image-card.png'),
        photoTitle: 'На зимний матч',
        quote: {
          title: 'На зимний матч',
          quote: 'Вот такой классный у нас образ. Все болельщики на стадионе захотят такой же. Даже с трибун противника будет видно какой классный образ у вас.',
          link: '/images'
        },
        productCarts: [
          {
            productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
            favorite: false,
            title: 'Футболка вратарская взрослая',
            firm: 'Сезон 2020/2021',
            price: '5990'
          },
          {
            productPreviewImg: require('~/assets/image/form.png'),
            favorite: false,
            title: 'Футболка вратарская взрослая',
            firm: 'Сезон 2020/2021',
            price: '5990'
          },
          {
            productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
            favorite: false,
            title: 'Футболка вратарская взрослая',
            firm: 'Сезон 2020/2021',
            price: '5990'
          },
          {
            productPreviewImg: require('~/assets/image/form.png'),
            favorite: false,
            title: 'Футболка вратарская взрослая',
            firm: 'Сезон 2020/2021',
            price: '5990'
          },
          {
            productPreviewImg: require('~/assets/image/form.png'),
            favorite: false,
            title: 'Футболка вратарская взрослая',
            firm: 'Сезон 2020/2021',
            price: '5990'
          },
          {
            productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
            favorite: false,
            title: 'Футболка вратарская взрослая',
            firm: 'Сезон 2020/2021',
            price: '5990'
          }
        ]
      }
    }
  },
  provide () {
    return {
      arrImages: [
        require('~/assets/image/detail-cart/image-1.png'),
        require('~/assets/image/detail-cart/image-2.png'),
        require('~/assets/image/detail-cart/image-3.png'),
        require('~/assets/image/detail-cart/image-4.png'),
        require('~/assets/image/detail-cart/image-5.png')
      ]
    }
  },
  computed: {
    ...mapGetters('filter',
      [
        'getForwhom',
        'getSelected'
      ]
    ),
    isAllImagesAddFavorite () {
      return !this.productCarts.filter(item => item.favorite === false).length
    }
  },
  mounted () {
    const productCards = this.imageCart.productCarts
    const pushEmptyCards = function () {
      if (window.innerWidth < 1280 && productCards.length % 2 !== 0) {
        productCards.push({})
      } else if (window.innerWidth >= 1280 && window.innerWidth < 1920 && productCards.length % 3 === 1) {
        productCards.push({}, {})
      } else if (window.innerWidth >= 1280 && window.innerWidth < 1920 && productCards.length % 3 === 2) {
        productCards.push({})
      } else if (window.innerWidth >= 1920 && productCards.length % 4 === 1) {
        productCards.push({}, {}, {})
      } else if (window.innerWidth >= 1920 && productCards.length % 4 === 2) {
        productCards.push({}, {})
      } else if (window.innerWidth >= 1920 && productCards.length % 4 === 3) {
        productCards.push({})
      }
    }

    pushEmptyCards()
    window.addEventListener('resize', debounce(pushEmptyCards, 200))
  },
  methods: {
    changeFilter (key, value) {
      this.toggleSelected(key, value)

      if (key.split('-').includes('category')) {
        this.sendDataCards()
      } else {
        this.sendDataCount()
      }
    },
    isSelected (key) {
      return this.getSelected.findIndex(item => item.key === key) >= 0
    },
    getPopUp () {
      console.log('Pop-Up Window')
    },

    /**
     * Добавить/Удалить избранное
     * @description делаем запрос на изменения всех карточек образа
     *  и меням состояние после запроса
     */
    toggleFavoriteProduct () {
      clearTimeout(this.timeId)
      this.timeId = setTimeout(async () => {
        let res = null
        let fav = null

        if (this.isAllImagesAddFavorite) {
          res = await this.$store.dispatch('favorites/removeImagesById', this.slug)
          fav = false
        } else {
          res = await this.$store.dispatch('favorites/addImagesById', this.slug)
          fav = true
        }

        if (res.success) {
          this.productCarts.forEach((item) => { item.favorite = fav })
        }
      }, 255)
    },
    /**
     * Изменяем состояние избранного
     * @description после нажатия изменили состояни и сделали товар не избранным,
     * проще говоря динамическое отображение
     */
    onToggleFavorite (id, favorite) {
      this.productCarts.forEach((item) => {
        if (Number(item.id) === Number(id)) {
          item.favorite = favorite
        }
      })
    },
    addToCard () {
      // Доделать после появления карзины
      if (this.visibleCountToBtn) {
        return
      }
      this.countProductToCard++
      this.visibleCountToBtn = true
      setTimeout(() => {
        this.visibleCountToBtn = false
      }, 3000)
    },
    toggleFavorite () {
      // Доделать после появления избранного
      this.favorite = !this.favorite
    }
  }
}
