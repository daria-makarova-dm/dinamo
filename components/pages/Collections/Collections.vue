<template lang="pug">
  include ./Collections
</template>

<script>
const CollectionsList = () => import('~/components/collections-component/CollectionsList/CollectionsList')
export default {
  components: {
    CollectionsList
  },
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
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "./Collections";
</style>
