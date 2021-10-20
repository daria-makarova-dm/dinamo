/* eslint-disable no-console */

const catalog = {
  title: 'Каталог',
  total: 147,
  items: [
    {
      productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
      favorite: true,
      title: 'Шапка с помпоном и вышитым логотипом Динамо',
      price: '1290',
      discountPrice: '1990'
    },
    {
      productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
      favorite: false,
      title: 'Шорты вратарские взрослые',
      firm: 'Сезон 2020/2021',
      price: '3990'
    },
    {
      productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
      favorite: true,
      title: 'Шорты вратарские взрослые',
      firm: 'Сезон 2020/2021',
      price: '3990'
    },
    {
      productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
      favorite: false,
      title: 'Шорты вратарские взрослые',
      firm: 'Сезон 2020/2021',
      price: '3990'
    },
    {
      productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
      favorite: false,
      title: 'Шорты вратарские взрослые',
      firm: 'Сезон 2020/2021',
      price: '3990'
    }
  ]
}

// Действия
export default {
  fetch (context, payload) {
    try {
      // const config = {
      //   withCredentials: true,
      //   params: payload
      // }
      // const data = await this.$axios.$get('catalog', config)
      const data = catalog
      return {
        success: true,
        status: 'success',
        error: null,
        data
      }
    } catch (error) {
      return {
        success: false,
        status: 'error',
        error,
        data: null
      }
    }
  }
}
