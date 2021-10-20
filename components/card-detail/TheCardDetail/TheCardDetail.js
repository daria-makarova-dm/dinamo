const ImageTabCartDetail = () => import('~/components/card-detail/ImageTabCartDetail/ImageTabCartDetail.vue')
const CardDetailShareSocial = () => import('~/components/card-detail/CardDetailShareSocial/CardDetailShareSocial.vue')
const CardImageSlider = () => import('~/components/card-detail/CardImageSlider/CardImageSlider.vue')
const ModalTableSize = () => import('~/components/ModalTableSize/ModalTableSize.vue')
const CardDetailDiscountMessage = () => import('~/components/CardDetailDiscountMessage/CardDetailDiscountMessage.vue')
const FavoriteBtn = () => import('~/components/FavoriteBtn/FavoriteBtn.vue')
const CardDetailCustomization = () => import('~/components/card-detail/CardDetailCustomization/CardDetailCustomization.vue')

export default {
  components: {
    ImageTabCartDetail,
    CardDetailShareSocial,
    ModalTableSize,
    CardDetailDiscountMessage,
    FavoriteBtn,
    CardImageSlider,
    CardDetailCustomization
  },
  data () {
    return {
      objCardDescription: {
        title: 'Куртка утеплённая',
        titleGray: 'Atributika & Club™',
        article: 'Артикул: 100131',
        label: {
          discount: true,
          hit: true,
          novelty: true
        },
        discountMessage: {
          count: '-15%',
          title: 'скидка на все товары!',
          text: 'Покупай любое количество товаров с 15% скидкой на каждый из них!'
        },
        table: {
          caption: 'таблица размеров',
          row: [
            ['XS', '42–44', '166–170', '88', '76'],
            ['S', '44–46', '170–176', '92', '80'],
            ['M', '46–48', '176–182', '96', '84'],
            ['L', '48–50', '182–186', '100', '88'],
            ['XL', '50–52', '184–186', '104', '92'],
            ['2XL', '52–54', '186–188', '108', '96'],
            ['3XL', '54–56', '188–190', '112', '100'],
            ['4XL', '56–58', '190–192', '116', '104'],
            ['5XL', '58–60', '192–194', '120', '108']
          ]
        },
        colors: [
          {
            active: false,
            background: '#000000',
            link: '/'
          },
          {
            active: true,
            background: '#0959A1',
            link: '/'
          },
          {
            active: false,
            background: '#ffffff',
            link: '/'
          }
        ],
        blockSize: [
          { type: 'S', disabled: false },
          { type: 'M', disabled: false },
          { type: 'L', disabled: true },
          { type: 'XL', disabled: false },
          { type: '2XL', disabled: true }
        ],
        price: 5990,
        discountPrice: 7990,
        bonusPrice: 'начислим До\u00A065\u00A0баллов',
        stock: 18,
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
        ],
        make: [
          'Хлопок — 50%',
          'Полиэстер — 50%'
        ],
        care: {
          item: [
            'Машинная стирка до 40 °C',
            'Глажка при температуре до 110 °C',
            'Отбеливание запрещено'
          ],
          icons: [
            require('~/assets/image/water-temp.svg'),
            require('~/assets/image/iron.svg'),
            require('~/assets/image/triangle.svg')
          ]
        }
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
      // objCardDescription: {
      //   title: 'Куртка утеплённая',
      //   titleGray: 'Atributika & Club™',
      //   article: 'Артикул: 100131',
      //   label: {
      //     discount: true,
      //     hit: true,
      //     novelty: true
      //   },
      //   discountMessage: {
      //     count: '-15%',
      //     title: 'скидка на все товары!',
      //     text: 'Покупай любое количество товаров с 15% скидкой на каждый из них!'
      //   },
      //   table: {
      //     caption: 'таблица размеров',
      //     row: [
      //       ['XS', '42–44', '166–170', '88', '76'],
      //       ['S', '44–46', '170–176', '92', '80'],
      //       ['M', '46–48', '176–182', '96', '84'],
      //       ['L', '48–50', '182–186', '100', '88'],
      //       ['XL', '50–52', '184–186', '104', '92'],
      //       ['2XL', '52–54', '186–188', '108', '96'],
      //       ['3XL', '54–56', '188–190', '112', '100'],
      //       ['4XL', '56–58', '190–192', '116', '104'],
      //       ['5XL', '58–60', '192–194', '120', '108']
      //     ]
      //   },
      //   colors: [
      //     {
      //       active: false,
      //       background: '#000000',
      //       link: '/'
      //     },
      //     {
      //       active: true,
      //       background: '#0959A1',
      //       link: '/'
      //     },
      //     {
      //       active: false,
      //       background: '#ffffff',
      //       link: '/'
      //     }
      //   ],
      //   blockSize: [
      //     { type: 'S', disabled: false },
      //     { type: 'M', disabled: false },
      //     { type: 'L', disabled: true },
      //     { type: 'XL', disabled: false },
      //     { type: '2XL', disabled: true }
      //   ],
      //   price: 5990,
      //   discountPrice: 7990,
      //   bonusPrice: 'начислим До\u00A065\u00A0баллов',
      //   stock: 18,
      //   text: [
      //     'Мужская демисезонная куртка. Предназначена для повседневной носки и активного отдыха. Куртка прямого силуэта с втачным рукавом. В вертикальных рельефах переда расположены карманы на потайной молнии.',
      //     'Куртка изготовлена из полиэстера. Ткань обладает водонепроницаемыми и ветрозащитными свойствами. Благодаря свойствам материала, а также уникальной технологии производства, она служит надежной и теплой защитой от холода, дождя и снега. Наполнитель изготовлен из ультратонкого микроволокна, воздушный и устойчивый к деформациям.'
      //   ],
      //   list: [
      //     'Лёгкая, влагозащитная ткань;',
      //     'Боковые и внутренний карманы;',
      //     'Защитный ворот;',
      //     'Материал верха: 100% полиэстер;',
      //     'Материал наполнителя: искусственный пух из микроволокна;',
      //     'Производство: Россия.'
      //   ],
      //   make: [
      //     'Хлопок — 50%',
      //     'Полиэстер — 50%'
      //   ],
      //   care: {
      //     item: [
      //       'Машинная стирка до 40 °C',
      //       'Глажка при температуре до 110 °C',
      //       'Отбеливание запрещено'
      //     ],
      //     icons: [
      //       require('~/assets/image/water-temp.svg'),
      //       require('~/assets/image/iron.svg'),
      //       require('~/assets/image/triangle.svg')
      //     ]
      //   }
      // }
    }
  },
  methods: {
    backgroundLinkColor (color) {
      return `background-color: ${color}`
    },
    backgroundLinkActiveBorder (color) {
      return `border: 1px solid ${color}`
    },
    toggleSizeBtn (btn) {
      this.activeSizeBtn = btn
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
