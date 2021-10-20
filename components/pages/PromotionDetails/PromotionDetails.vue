<template lang="pug">
  include PromotionDetails
</template>

<script>
import PromotionItem from '~/components/promotions-component/PromotionItem/PromotionItem'
import MoreProducts from '~/components/MoreProducts/MoreProducts'
import Video from '~/components/Video/Video'

export default {
  components: {
    PromotionItem,
    MoreProducts,
    Video
  },
  data () {
    return {
      moreProducts: {
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
        ]
      }
    }
  }

  // async asyncData ({ store, route }) {
  //   const promoCard = await store.dispatch('promotions/fetchById', { id: route.params.id })
  //   return { promoCard }
  // },
  // data () {
  //   return {
  //     promoCard: {}
  //   }
  // }
}
</script>

<style lang="scss">
  @import 'PromotionDetails';
</style>
