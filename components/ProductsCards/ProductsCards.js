const TheProductCard = () => import('~/components/TheProductCart/TheProductCart.vue')
const ArrowIcon = () => import('~/components/Icons/ArrowIcon/ArrowIcon.vue')

export default {
  components: { TheProductCard, ArrowIcon },
  data () {
    return {
      productsCardsTitle: 'Зимние скидки до\u00A0-40%',
      link: '/',
      productCarts: [
        {
          id: 1,
          productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
          favorite: true,
          title: 'Шапка с помпоном и вышитым логотипом Динамо',
          price: '1290',
          discountPrice: '1990'
        },
        {
          id: 2,
          productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
          favorite: false,
          title: 'Шорты вратарские взрослые',
          firm: 'Сезон 2020/2021',
          price: '3990'
        },
        {
          id: 3,
          productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
          favorite: true,
          title: 'Шорты вратарские взрослые',
          firm: 'Сезон 2020/2021',
          price: '3990'
        },
        {
          id: 4,
          productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
          favorite: false,
          title: 'Шорты вратарские взрослые',
          firm: 'Сезон 2020/2021',
          price: '3990'
        },
        {
          id: 5,
          productPreviewImg: require('~/assets/image/form.png'),
          favorite: false,
          title: 'Шорты вратарские взрослые',
          firm: 'Сезон 2020/2021',
          price: '3990'
        }
      ]
    }
  }
}
