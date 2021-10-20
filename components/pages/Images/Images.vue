<template lang="pug">
  include ./Images
</template>

<script>
const ImagesList = () => import('~/components/images-component/ImagesList/ImageList')
export default {
  components: { ImagesList },
  data () {
    return {
      imagesData: [
        {
          id: 1,
          type: 'small',
          mediaMaterials: {
            urlMain: require('~/assets/image/preview-second-catalog.png'),
            additionalImg: [
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
          mediaMaterials: {
            urlMain: require('~/assets/image/preview-second-catalog.png'),
            additionalImg: [
              require('~/assets/image/preview-second-catalog.png'),
              require('~/assets/image/preview-second-catalog.png'),
              require('~/assets/image/preview-second-catalog.png')
            ]
          }
        },
        {
          id: 3,
          type: 'big',
          mediaMaterials: {
            urlMain: require('~/assets/image/preview-second-catalog.png'),
            additionalImg: [
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
  @import "./Images";
</style>
