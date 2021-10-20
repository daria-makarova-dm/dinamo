const SuggestionSlider = () => import('~/components/SuggestionSlider/SuggestionSlider.vue')
const AdvertisingBanner = () => import('~/components/AdvertisingBanner/AdvertisingBanner.vue')
const TheImageCart = () => import('~/components/image-card-component/TheImageCart/TheImageCart.vue')
// const TheProductCard = () => import('~/components/TheProductCart/TheProductCart.vue')
const TheCrossLink = () => import('~/components/TheCrossLink/TheCrossLink.vue')
const ArrowIcon = () => import('~/components/Icons/ArrowIcon/ArrowIcon.vue')
const ProductsCards = () => import('~/components/ProductsCards/ProductsCards.vue')

export default {
  components: { SuggestionSlider, AdvertisingBanner, TheImageCart, TheCrossLink, ArrowIcon, ProductsCards },
  data () {
    return {
      slides: [
        {
          imgUrlSmall: require('~/assets/image/main-slider-small1.png'),
          imgUrlMedium: require('~/assets/image/main-slider-medium1.png'),
          imgUrlBig: require('~/assets/image/main-slider-big1.png'),
          title: 'Mizuno × Динамо Москва Капсульная коллекция бутсов'
        },
        {
          imgUrlSmall: require('~/assets/image/main-slider-small2.png'),
          imgUrlMedium: require('~/assets/image/main-slider-medium2.png'),
          imgUrlBig: require('~/assets/image/main-slider-big2.png'),
          title: 'На зимний матч'
        },
        {
          imgUrlSmall: require('~/assets/image/main-slider-small3.png'),
          imgUrlMedium: require('~/assets/image/main-slider-medium3.png'),
          imgUrlBig: require('~/assets/image/main-slider-big3.png'),
          title: 'Коллекция домашней одежды'
        }
      ],
      banners: [
        {
          title: 'Билеты на матчи ФК «Динамо москва»',
          img: {
            src: '/',
            alt: 'banner'
          },
          link: {
            href: 'javascript:void(0)',
            text: 'tickets.fcdynamo.ru'
          }
        },
        {
          title: 'asics × динамо москва',
          img: {
            src: '/',
            alt: 'banner'
          },
          link: {
            href: 'javascript:void(0)',
            text: 'смотреть коллаборацию'
          }
        }
      ],
      imageCart: {
        photoUrl: require('~/assets/image/image-card.png'),
        photoTitle: 'Антон Шунин',
        quote: {
          title: 'Антон Шунин',
          quote: 'Футбольный мяч летит в сетку со скоростью больше 100 км/ч. Твоя задача — не дать ему туда попасть. Но даже в такие моменты важно выглядеть стильно.',
          link: '/images/1'
        },
        productCarts: [
          {
            id: 1,
            productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
            favorite: false,
            title: 'Футболка вратарская взрослая',
            firm: 'Сезон 2020/2021',
            price: '5990'
          },
          {
            id: 2,
            productPreviewImg: require('~/assets/image/form.png'),
            favorite: false,
            title: 'Футболка вратарская взрослая',
            firm: 'Сезон 2020/2021',
            price: '5990'
          },
          {
            id: 3,
            productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
            favorite: false,
            title: 'Футболка вратарская взрослая',
            firm: 'Сезон 2020/2021',
            price: '5990'
          },
          {
            id: 4,
            productPreviewImg: require('~/assets/image/form.png'),
            favorite: false,
            title: 'Футболка вратарская взрослая',
            firm: 'Сезон 2020/2021',
            price: '5990'
          },
          {
            id: 5,
            productPreviewImg: require('~/assets/image/form.png'),
            favorite: false,
            title: 'Футболка вратарская взрослая',
            firm: 'Сезон 2020/2021',
            price: '5990'
          },
          {
            id: 6,
            productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
            favorite: false,
            title: 'Футболка вратарская взрослая',
            firm: 'Сезон 2020/2021',
            price: '5990'
          }
        ]
      },
      // productCarts: [
      //   {
      //     productPreviewImg: '/',
      //     favorite: true,
      //     title: 'Шапка с помпоном и вышитым логотипом Динамо',
      //     price: '1290',
      //     discountPrice: '1990'
      //   },
      //   {
      //     productPreviewImg: '/',
      //     favorite: false,
      //     title: 'Шорты вратарские взрослые',
      //     firm: 'Сезон 2020/2021',
      //     price: '3990'
      //   },
      //   {
      //     productPreviewImg: '/',
      //     favorite: true,
      //     title: 'Шорты вратарские взрослые',
      //     firm: 'Сезон 2020/2021',
      //     price: '3990'
      //   },
      //   {
      //     productPreviewImg: '/',
      //     favorite: false,
      //     title: 'Шорты вратарские взрослые',
      //     firm: 'Сезон 2020/2021',
      //     price: '3990'
      //   },
      //   {
      //     productPreviewImg: '/',
      //     favorite: false,
      //     title: 'Шорты вратарские взрослые',
      //     firm: 'Сезон 2020/2021',
      //     price: '3990'
      //   }
      // ],
      crossLinks: [
        {
          link: '/catalog',
          srcImage: require('~/assets/image/preview-second-catalog.png'),
          title: 'Будущее наступило сегодня',
          type: 'half'
        },
        {
          link: '/catalog',
          srcImage: require('~/assets/image/form.png'),
          title: 'Одежда на каждый день',
          type: 'half'
        },
        {
          link: '/catalog',
          srcImage: require('~/assets/image/preview-second-catalog.png'),
          title: 'Мужчины',
          type: 'rub'
        },
        {
          link: '/catalog',
          srcImage: require('~/assets/image/form.png'),
          title: 'Женщины',
          type: 'rub'
        },
        {
          link: '/catalog',
          srcImage: require('~/assets/image/preview-second-catalog.png'),
          title: 'Дети',
          type: 'rub'
        }
      ]
    }
  }
}
