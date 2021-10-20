/* eslint-disable no-console */

const show = [
  {
    name: '12',
    value: 12
  },
  {
    name: '24',
    value: 24
  },
  {
    name: '48',
    value: 48
  }
]

const sort = [
  {
    name: 'по популярности',
    value: 'popular_desc'
  },
  {
    name: 'по увеличению цены',
    value: 'price_asc'
  },
  {
    name: 'по уменьшению цены',
    value: 'price_desc'
  },
  {
    name: 'сначала новинки',
    value: 'new_desc'
  }
]

const getAllValueByValue = (value, arr) => {
  const find = arr.filter(item => String(item.value) === String(value))
  return find.length ? find[0] : false
}

function fetch ({ commit }, path, query) {
  const data = {
    list: [],
    value: {},
    query: ''
  }

  try {
    // const res = await this.$axios.$get(path)
    const res = path === 'sort' ? sort : show
    data.list = res
    data.value = res[0]
    data.query = res[0].value

    if (query && query.length && res.length) {
      const val = getAllValueByValue(query, res)
      data.value = val || data.value
      data.query = val.value || data.query
    }

    if (path === 'sort') {
      commit('setSortValue', data.value)
    } else {
      commit('setShowValue', data.value)
    }

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

export default {

  /**
   * Запрос: Получаем все что есть по "Сортировке"
   * @returns {Object} сведенья об запросе
   */
  async showFetch (context, payload) {
    return await fetch.call(this, context, 'show', payload)
  },

  /**
   * Запрос: Получаем все что есть по "Товаров на странице"
   * @returns {Object} сведенья об запросе
   */
  async sortFetch (context, payload) {
    return await fetch.call(this, context, 'sort', payload)
  }
}
