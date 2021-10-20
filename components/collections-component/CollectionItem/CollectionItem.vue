<template lang="pug">
  include CollectionItem
</template>

<script>
const TheProductCart = () => import('~/components/TheProductCart/TheProductCart.vue')
const TheCrossLink = () => import('~/components/TheCrossLink/TheCrossLink.vue')
const CollectionsList = () => import('~/components/collections-component/CollectionsList/CollectionsList.vue')
const ModalVideo = () => import('~/components/ModalVideo/ModalVideo.vue')

export default {
  name: 'CollectionItem',
  components: { TheProductCart, TheCrossLink, CollectionsList, ModalVideo },
  data () {
    return {
      collectionsCards: [
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
      collectionCard: {
        id: 1,
        url: {
          poster: require('~/assets/image/preview-second-catalog.png'),
          src: require('~/assets/videos/rabbit.mp4')
        },
        // url: require('~/assets/image/preview-second-catalog.png'),
        title: 'СуперКоллекция!!!!',
        preview: 'Коллекция',
        description: 'Подробное описание Коллекции Подробное описание Коллекции Подробное описание Коллекции ' +
          'Подробное описание Коллекции Подробное описание Коллекции Подробное описание Коллекции Подробное описание Коллекции ' +
          'Подробное описание Коллекции Подробное описание Коллекции Подробное описание Коллекции Подробное описание Коллекции ',
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
      productCards: [
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
        }
      ],
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
      ]
    }
  }
}
</script>

<style lang="scss">
  @import './CollectionItem';
</style>
