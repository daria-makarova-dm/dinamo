/* eslint-disable no-console */

const answer = {
  cards: {
    total: 147,
    items: [
      {
        productPreviewImg: '/_nuxt/assets/image/preview-second-catalog.png',
        favorite: true,
        title: 'Шапка с помпоном и вышитым логотипом Динамо',
        price: '1290',
        discountPrice: '1990'
      },
      {
        productPreviewImg: '/_nuxt/assets/image/preview-second-catalog.png',
        favorite: false,
        title: 'Шорты вратарские взрослые',
        firm: 'Сезон 2020/2021',
        price: '3990'
      },
      {
        productPreviewImg: '/_nuxt/assets/image/preview-second-catalog.png',
        favorite: true,
        title: 'Шорты вратарские взрослые',
        firm: 'Сезон 2020/2021',
        price: '3990'
      },
      {
        productPreviewImg: '/_nuxt/assets/image/preview-second-catalog.png',
        favorite: false,
        title: 'Шорты вратарские взрослые',
        firm: 'Сезон 2020/2021',
        price: '3990'
      },
      {
        productPreviewImg: '/_nuxt/assets/image/preview-second-catalog.png',
        favorite: false,
        title: 'Шорты вратарские взрослые',
        firm: 'Сезон 2020/2021',
        price: '3990'
      }
    ]
  },
  images: {
    total: 3,
    items: []
  },
  promotions: {
    total: 2,
    items: [
      {
        id: 1,
        start: '29 мар 2021',
        end: '29 апр 2021',
        url: '/_nuxt/assets/image/preview-second-catalog.png',
        title: 'СуперАКЦИЯ!!!!',
        preview: 'СуперАкция СуперАкция СуперАкция СуперАкция СуперАкция СуперАкция СуперАкция СуперАкция',
        description: 'Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции'
      },
      {
        id: 2,
        start: '29 мар 2021',
        end: '29 апр 2021',
        url: '/_nuxt/assets/image/preview-second-catalog.png',
        title: 'СуперАКЦИЯ!!!!',
        preview: 'СуперАкция СуперАкция СуперАкция СуперАкция СуперАкция СуперАкция СуперАкция СуперАкция',
        description: 'Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции'
      },
      {
        id: 3,
        start: '29 мар 2021',
        end: '29 апр 2021',
        url: '/_nuxt/assets/image/preview-second-catalog.png',
        title: 'СуперАКЦИЯ!!!!',
        preview: 'СуперАкция СуперАкция СуперАкция СуперАкция СуперАкция СуперАкция СуперАкция СуперАкция',
        description: 'Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции'
      },
      {
        id: 4,
        start: '29 мар 2021',
        end: '29 апр 2021',
        url: '/_nuxt/assets/image/preview-second-catalog.png',
        title: 'СуперАКЦИЯ!!!!',
        preview: 'СуперАкция СуперАкция СуперАкция СуперАкция СуперАкция СуперАкция СуперАкция СуперАкция',
        description: 'Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции'
      },
      {
        id: 5,
        start: '29 мар 2021',
        end: '29 апр 2021',
        url: '/_nuxt/assets/image/preview-second-catalog.png',
        title: 'СуперАКЦИЯ!!!!',
        preview: 'СуперАкция СуперАкция СуперАкция СуперАкция СуперАкция СуперАкция СуперАкция СуперАкция',
        description: 'Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции Подробное описание СуперАкции'
      }
    ]
  }
}

export default {
  async request (context, payload) {
    const url = 'https://dinamo-c73bf-default-rtdb.firebaseio.com/search.json'
    const response = await fetch(url)
    const result = await response.json()

    if (!response.ok) {
      const error = new Error(response.message || 'failed response')
      throw error
    }

    context.commit('addResult', result)
  },

  /**
   * Получить результат по поиску
   * @param {*} context
   * @param {Object} payload
   */
  fetchBySearch (context, payload) {
    try {
      // const data = await this.$axios.$get('answer', {
      //   params: { ...payload }
      // })
      const data = answer
      context.commit('setSearchAnswer', data)
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
  },
  reset (context) {
    context.commit('resetSearch')
  }
}
