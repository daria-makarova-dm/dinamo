/* eslint-disable no-console */

// Параметры
// const PAGE = 1
// const LIMIT = 12
// const PATH = 'favorites'
const favorites = {
  title: 'Избранное',
  total: 21,
  items: [
    {
      id: 101,
      productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
      favorite: true,
      title: 'Шапка с помпоном и вышитым логотипом Динамо',
      price: '1290',
      discountPrice: '1990'
    },
    {
      id: 721,
      productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
      favorite: true,
      title: 'Шорты вратарские взрослые',
      firm: 'Сезон 2020/2021',
      price: '3990'
    },
    {
      id: 221,
      productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
      favorite: true,
      title: 'Шорты вратарские взрослые',
      firm: 'Сезон 2020/2021',
      price: '3990'
    },
    {
      id: 621,
      productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
      favorite: true,
      title: 'Шорты вратарские взрослые',
      firm: 'Сезон 2020/2021',
      price: '3990'
    },
    {
      id: 836,
      productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
      favorite: true,
      title: 'Шорты вратарские взрослые',
      firm: 'Сезон 2020/2021',
      price: '3990'
    }
  ]
}

/**
 * Запрос: Добавить/Удалить
 * @param {String} type images/product
 * @param {Number | String} id айди
 * @param {String} method post/get/delete
 * @returns {Object}
 */
// async function sendById (type, id, method) {
function sendById (type, id, method) {
  try {
    // const data = await this.$axios[`$${method}`](PATH, {
    //   params: { id, type }
    // })
    // const data = await this.$axios.$get(PATH, {
    //   params: { id, type, method }
    // })

    console.log('type: ', type)
    console.log('id: ', id)
    console.log('method: ', method)
    const data = favorites

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
      error: null,
      data: null
    }
  }
}

export default {

  /**
   * Получить: Список всех Избранного
   * @param {Object} context
   * @returns {Object}
   */
  // async fetch ({ commit }, payload) {
  fetch ({ commit }, payload) {
    // const page = (payload && payload.page) ? payload.page : PAGE
    // const limit = (payload && payload.limit) ? payload.limit : LIMIT
    try {
      // const data = await this.$axios.$get(PATH, { params: { page, limit } })
      const data = favorites
      commit('setItems', data.items)
      commit('setTotal', data.total)
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
        error: null,
        data: null
      }
    }
  },

  /**
   * Добавить: Добавление Образа по ID
   * @param {Object} context
   * @param {Number | String} id
   * @returns {Object} anwer
   */
  async addImagesById (context, id) {
    return await sendById.call(this, 'images', id, 'post')
  },

  /**
   * Добавить: Добавление Товара по ID
   * @param {Object} context
   * @param {Number | String} id
   * @returns {Object} anwer
   */
  async addProductById (context, id) {
    return await sendById.call(this, 'product', id, 'post')
  },

  /**
   * Удалить: Удалить Образ по ID
   * @param {Object} context
   * @param {Number | String} id
   * @returns {Object}
   */
  async removeImagesById (context, id) {
    return await sendById.call(this, 'images', id, 'delete')
  },

  /**
   * Удалить: Удалить Товар по ID
   * @param {Object} context
   * @param {Number | String} id
   * @returns {Object}
   */
  async removeProductById (context, id) {
    return await sendById.call(this, 'product', id, 'delete')
  }
}
