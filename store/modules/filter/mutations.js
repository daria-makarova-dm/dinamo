export default {

  /**
   * Установка: тип запроса: cards, count
   * @param {Object} s
   * @param {String} payload cards or count
   */
  setType (state, payload) {
    state.type = payload
  },

  /**
   * Установка: Колличесвто найденых товаров в тултипе
   * @param {Object} state
   * @param {String|Number} payload кол-во товаров
   */
  setCount (state, payload) {
    state.count = payload
  },

  /**
   * Установка: Категории и Под категории
   * @param {Object} state
   * @param {Array<Object>} payload
   */
  setCategories (state, payload) {
    state.categories.items = payload
  },

  /**
   * Установка: Выбранных/Не выбранных фильтров
   * @param {Object} state
   * @param {Object} payload ассоциативный массив
   */
  setSelected (state, payload) {
    state.selected = payload
  },

  /**
   * Установка: Для кого "Мужчины, Женшины, Дети"
   * @param {Object} state
   * @param {Array<Object>} payload
   */
  setForwhom (state, payload) {
    state.forwhom.items = payload
  },

  /**
   * Установка: Специальные предложения "Со Скидкой, Новинки, Хит"
   * @param {Object} state
   * @param {Array<Object>} payload
   */
  setSpecial (state, payload) {
    state.special.items = payload
  },

  /**
   * Установка: Коллекция
   * @param {Object} state
   * @param {Array<Object>} payload
   */
  setCollection (state, payload) {
    state.сollection.items = payload
  },

  /**
   * Установка: Размер одежды
   * @param {Object} state
   * @param {Array<Object>} payload
   */
  setClothingSize (state, payload) {
    state.clothingSize.items = payload
  },

  /**
   * Установка: Размер обуви
   * @param {Object} state
   * @param {Array<Object>} payload
   */
  setShoeSize (state, payload) {
    state.shoeSize.items = payload
  },

  /**
   * Установка: Цвет
   * @param {Object} state
   * @param {Array<Object>} payload
   */
  setColor (state, payload) {
    state.color.items = payload
  },

  /**
   * Установка: Цена общая
   * @param {Object} state
   * @param {Array<Object>} payload
   */
  setPrice (state, payload) {
    state.price = payload
  },

  /**
   * Установка: Цена текущий минимум
   * @param {Object} state
   * @param {Number} payload цена минимум
   */
  setPriceCurrentMin (state, payload) {
    state.price.currentMin = +payload
  },

  /**
   * Установка: Цена текущий максимум
   * @param {Object} state
   * @param {Number} payload цена максимум
   */
  setPriceCurrentMax (state, payload) {
    state.price.currentMax = +payload
  },

  /**
   * Установка: Цена минимальная возможноая
   * @param {Object} state
   * @param {Number} payload цена минимум
   */
  setPriceMin (state, payload) {
    state.price.min = +payload
  },

  /**
   * Установка: Цена максимально возможноая
   * @param {Object} state
   * @param {Number} payload цена максимум
   */
  setPriceMax (state, payload) {
    state.price.max = +payload
  }
}
