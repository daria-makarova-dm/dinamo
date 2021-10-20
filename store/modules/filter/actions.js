/* eslint-disable no-console */

const filter = {
  price: {
    min: 100,
    max: 10000,
    currentMin: 1000,
    currentMax: 7500
  },
  count: 45,
  color: [
    {
      id: 1,
      title: 'Черный',
      color: '000000'
    },
    {
      id: 2,
      title: 'Синий',
      color: '0959A1'
    },
    {
      id: 3,
      title: 'Белый',
      color: 'FFFFFF'
    },
    {
      id: 4,
      title: 'Красный',
      color: 'CE0013'
    },
    {
      id: 5,
      title: 'Серый',
      color: 'BDBDBD'
    },
    {
      id: 6,
      title: 'Золотой',
      color: 'BFA069'
    }
  ],
  categories: [
    {
      id: 1,
      title: 'Верхняя одежда',
      slug: 'verhnyaya-odezhda',
      items: [
        {
          id: 1,
          title: 'Футболки и олимпийки',
          slug: 'futbolki-i-olimpijki'
        },
        {
          id: 2,
          title: 'Штаны',
          slug: 'shtany'
        },
        {
          id: 3,
          title: 'Комплекты',
          slug: 'komplekty'
        }
      ]
    },
    {
      id: 2,
      title: 'Свитшоты и толстовки',
      slug: 'svitshoty-i-tolstovki',
      items: [
        {
          id: 1,
          title: 'Футболки и олимпийки',
          slug: 'futbolki-i-olimpijki'
        },
        {
          id: 2,
          title: 'Штаны',
          slug: 'shtany'
        },
        {
          id: 3,
          title: 'Комплекты',
          slug: 'komplekty'
        }
      ]
    },
    {
      id: 3,
      title: 'Футболки и поло',
      slug: 'futbolki-i-polo',
      items: [
        {
          id: 1,
          title: 'Футболки и олимпийки',
          slug: 'Futbolki-i-olimpijki'
        },
        {
          id: 2,
          title: 'Штаны',
          slug: 'Shtany'
        },
        {
          id: 3,
          title: 'Комплекты',
          slug: 'Komplekty'
        }
      ]
    },
    {
      id: 4,
      title: 'Борюки и шорты',
      slug: 'boryuki-i-shorty',
      items: [
        {
          id: 1,
          title: 'Футболки и олимпийки',
          slug: 'futbolki-i-olimpijki'
        },
        {
          id: 2,
          title: 'Штаны',
          slug: 'shtany'
        },
        {
          id: 3,
          title: 'Комплекты',
          slug: 'komplekty'
        }
      ]
    },
    {
      id: 5,
      title: 'Спортивные костюмы',
      slug: 'sportivnye-kostyumy',
      items: [
        {
          id: 1,
          title: 'Футболки и олимпийки',
          slug: 'futbolki-i-olimpijki'
        },
        {
          id: 2,
          title: 'Штаны',
          slug: 'shtany'
        },
        {
          id: 3,
          title: 'Комплекты',
          slug: 'komplekty'
        }
      ]
    },
    {
      id: 6,
      title: 'Аксессуары',
      slug: 'aksessuary',
      items: [
        {
          id: 1,
          title: 'Футболки и олимпийки',
          slug: 'futbolki-i-olimpijki'
        },
        {
          id: 2,
          title: 'Штаны',
          slug: 'shtany'
        },
        {
          id: 3,
          title: 'Комплекты',
          slug: 'komplekty'
        }
      ]
    },
    {
      id: 7,
      title: 'Обувь',
      slug: 'obuv',
      items: [
        {
          id: 1,
          title: 'Футболки и олимпийки',
          slug: 'futbolki-i-olimpijki'
        },
        {
          id: 2,
          title: 'Штаны',
          slug: 'shtany'
        },
        {
          id: 3,
          title: 'Комплекты',
          slug: 'komplekty'
        }
      ]
    }
  ],
  forwhom: [
    {
      id: 1,
      title: 'Мужчины'
    },
    {
      id: 2,
      title: 'Женщины'
    },
    {
      id: 3,
      title: 'Дети'
    }
  ],
  special: [
    {
      id: 1,
      title: 'Со скидкой'
    },
    {
      id: 2,
      title: 'Новинки'
    },
    {
      id: 3,
      title: 'Хит'
    }
  ],
  сollection: [
    {
      id: 1,
      title: 'Игровая форма 2020/2021'
    },
    {
      id: 2,
      title: 'British Tour 1945'
    },
    {
      id: 3,
      title: 'Яшин'
    },
    {
      id: 4,
      title: 'Осень/зима 2020–2021'
    },
    {
      id: 5,
      title: 'Весна/лето 2020'
    },
    {
      id: 6,
      title: 'Что-то еще 1'
    },
    {
      id: 7,
      title: 'Что-то еще 2'
    },
    {
      id: 8,
      title: 'Что-то еще 3'
    }
  ],
  clothingSize: [
    {
      id: 1,
      title: 'XS'
    },
    {
      id: 2,
      title: 'S'
    },
    {
      id: 3,
      title: 'M'
    },
    {
      id: 4,
      title: 'L'
    },
    {
      id: 5,
      title: 'XL'
    },
    {
      id: 6,
      title: '46'
    },
    {
      id: 7,
      title: '48'
    },
    {
      id: 8,
      title: '50'
    },
    {
      id: 9,
      title: '52'
    },
    {
      id: 10,
      title: '54'
    }
  ],
  shoeSize: [
    {
      id: 1,
      title: '36'
    },
    {
      id: 2,
      title: '37'
    },
    {
      id: 3,
      title: '38'
    },
    {
      id: 4,
      title: '39'
    },
    {
      id: 5,
      title: '40'
    },
    {
      id: 6,
      title: '41'
    },
    {
      id: 7,
      title: '42'
    },
    {
      id: 8,
      title: '43'
    },
    {
      id: 9,
      title: '44'
    },
    {
      id: 10,
      title: '45'
    }
  ]
}

/**
 * Поиск на существуюшего
 * @param {Array<Object>} selected массив
 * @param {String} key ключ
 * @returns {Boolean} true/false
 */
const isSelected = (selected, key) => {
  return selected.findIndex(item => item.key === key) >= 0
}

const splitedKey = (key) => {
  const arrKeys = key.split('-')
  return {
    id: arrKeys[arrKeys.length - 1],
    type: arrKeys[0],
    query: arrKeys.slice(1, arrKeys.length).join('-')
  }
}

/**
 * Метот для мутации
 * @param {String} key catalog
 * @param {String} value get/set
 * @returns {String} getCatalog/setCatalog
 */
const getCommitUpper = (key, value) => {
  const arrKey = key.split('')
  arrKey[0] = arrKey[0].toUpperCase()
  return value + arrKey.join('')
}

export default {

  /**
   *
   * @param {*} param0
   * @param {*} param1
   */
  addSelected ({ commit, getters }, { key, value }) {
    const selected = getters.getSelected.concat()
    let data = {}

    if (!isSelected(selected, key)) {
      data = splitedKey(key)
      selected.push({ key, value, ...data })
      commit('setSelected', selected)
    }
  },

  /**
   *
   * @param {*} param0
   * @param {*} key
   */
  removeSelected ({ commit, getters }, key) {
    const selected = getters.getSelected

    if (isSelected(selected, key)) {
      commit('setSelected', selected.filter(item => item.key !== key))
    }
  },

  /**
   *
   * @param {*} param0
   */
  removeSelectedAll ({ commit }) {
    commit('setSelected', [])
  },

  fetch ({ dispatch }, payload) {
    try {
      // const filter = await this.$axios.$get('filter')
      // const data = filter
      dispatch('setAllState', filter)
      dispatch('addSelectedAll', payload)
      return {
        success: true,
        status: 'success',
        error: null,
        data: filter
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

  // TODO: Переделать прием параметров из урла,
  // надо сделать так чтобы параметры искать в сторе
  /**
   *
   * @param {*} param0
   * @param {*} payload
   */
  addSelectedAll ({ dispatch, commit, getters }, payload) {
    const query = payload.query
    const queryParams = payload.queryParams

    for (const key in query) {
      // Цена макс или мин
      if (key.includes('priceMax') || key.includes('priceMin')) {
        const price = getters.getPrice
        price.currentMax = query.priceMax ? parseInt(query.priceMax) : price.currentMax
        price.currentMin = query.priceMin ? parseInt(query.priceMin) : price.currentMin
        commit('setPrice', price)

      // Остольные параметры
      } else if (!queryParams.includes(key)) {
        const value = query[key]

        // Одиночный параметр
        if (typeof value === 'string') {
          const arrVal = value.split('_')
          dispatch('addSelected', { key: `${key}-${arrVal[0]}`, value: arrVal[1] })

        // Массив параметров
        } else if (typeof value === 'object') {
          for (let i = 0; i < value.length; ++i) {
            const arrVal = value[i].split('_')
            dispatch('addSelected', { key: `${key}-${arrVal[0]}`, value: arrVal[1] })
          }
        }
      }
    }
  },

  /**
   * Установка параметров по url
   * @param {*} param0
   * @param {*} payload
   */
  setAllState ({ commit }, payload) {
    for (const key in payload) {
      const value = payload[key]
      const setName = getCommitUpper(key, 'set')
      if (key === 'сollection') {
        commit('setCollection', value)
      } else {
        commit(setName, value)
      }
    }
  }
}
