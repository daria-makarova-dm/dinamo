const TheCardDetail = () => import('~/components/card-detail/TheCardDetail/TheCardDetail.vue')
const MoreProducts = () => import('~/components/MoreProducts/MoreProducts.vue')
const Breadcrumbs = () => import('~/components/Breadcrumbs/Breadcrumbs.vue')

export default {
  components: { TheCardDetail, MoreProducts, Breadcrumbs },
  data () {
    return {
      moreProduct: {
        form: {
          title: 'Товары из этого образа',
          link: '/',
          arrProduct: [
            {
              productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
              propFavorite: false,
              title: 'Футболка вратарская взрослая',
              firm: 'Сезон 2020/2021',
              price: '5990',
              discountPrice: '5990'
            },
            {
              productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
              propFavorite: false,
              title: 'Футболка вратарская взрослая',
              firm: 'Сезон 2020/2021',
              price: '5990',
              discountPrice: '5990'
            },
            {
              productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
              propFavorite: false,
              title: 'Футболка вратарская взрослая',
              firm: 'Сезон 2020/2021',
              price: '5990',
              discountPrice: '5990'
            },
            {
              productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
              propFavorite: false,
              title: 'Футболка вратарская взрослая',
              firm: 'Сезон 2020/2021',
              price: '5990',
              discountPrice: '5990'
            },
            {
              productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
              propFavorite: false,
              title: 'Футболка вратарская взрослая',
              firm: 'Сезон 2020/2021',
              price: '5990',
              discountPrice: '5990'
            }
            // {
            //   productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
            //   propFavorite: false,
            //   title: 'Футболка вратарская взрослая',
            //   firm: 'Сезон 2020/2021',
            //   price: '5990',
            //   discountPrice: '5990'
            // },
            // {
            //   productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
            //   propFavorite: false,
            //   title: 'Футболка вратарская взрослая',
            //   firm: 'Сезон 2020/2021',
            //   price: '5990',
            //   discountPrice: '5990'
            // },
            // {
            //   productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
            //   propFavorite: false,
            //   title: 'Футболка вратарская взрослая',
            //   firm: 'Сезон 2020/2021',
            //   price: '5990',
            //   discountPrice: '5990'
            // }
          ]
        },
        more: {
          title: 'С эти товаром покупают',
          link: '/',
          arrProduct: [
            {
              productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
              propFavorite: false,
              title: 'Футболка вратарская взрослая',
              firm: 'Сезон 2020/2021',
              price: '5990',
              discountPrice: '5990'
            },
            {
              productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
              propFavorite: false,
              title: 'Футболка вратарская взрослая',
              firm: 'Сезон 2020/2021',
              price: '5990',
              discountPrice: '5990'
            },
            {
              productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
              propFavorite: false,
              title: 'Футболка вратарская взрослая',
              firm: 'Сезон 2020/2021',
              price: '5990',
              discountPrice: '5990'
            },
            {
              productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
              propFavorite: false,
              title: 'Футболка вратарская взрослая',
              firm: 'Сезон 2020/2021',
              price: '5990',
              discountPrice: '5990'
            },
            {
              productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
              propFavorite: false,
              title: 'Футболка вратарская взрослая',
              firm: 'Сезон 2020/2021',
              price: '5990',
              discountPrice: '5990'
            }
            // {
            //   productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
            //   propFavorite: false,
            //   title: 'Футболка вратарская взрослая',
            //   firm: 'Сезон 2020/2021',
            //   price: '5990',
            //   discountPrice: '5990'
            // },
            // {
            //   productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
            //   propFavorite: false,
            //   title: 'Футболка вратарская взрослая',
            //   firm: 'Сезон 2020/2021',
            //   price: '5990',
            //   discountPrice: '5990'
            // },
            // {
            //   productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
            //   propFavorite: false,
            //   title: 'Футболка вратарская взрослая',
            //   firm: 'Сезон 2020/2021',
            //   price: '5990',
            //   discountPrice: '5990'
            // }
          ]
        }
      }
    }
  }
}
