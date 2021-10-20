export default {

  /**
   * Отдать: Получаем тип запроса: cards, count
   * @param {Object} s
   * @returns {String}
   */
  getType: s => s.type,

  /**
   * Отдать: Колличество товара
   * @param {Object} s
   * @returns {String|Number}
   */
  getCount: s => s.count,

  /**
   * Отдать: Категории и Под категории
   * @param {Object} s
   * @returns {Array<Object>}
   */
  getCategories: s => s.categories.items,

  /**
   * Отдать: Выбранные фильтры
   * @param {Object} s
   * @returns {Object} ассоциативный массив
   */
  getSelected: s => s.selected,

  /**
   * Отдать: Для кого "Мужчины, Женшины, Дети"
   * @param {Object} s
   * @returns {Array}
   */
  getForwhom: s => s.forwhom.items,

  /**
   * Отдать: Специальные предложения: Со скидкой, Новинки, Хит
   * @param {Object} s
   * @returns {Array}
   */
  getSpecial: s => s.special.items,

  /**
   * Отдать: Коллекция
   * @param {Object} s
   * @returns {Array}
   */
  getCollection: s => s.сollection.items,

  /**
   * Отдать: Размер одежды
   * @param {Object} s
   * @returns {Array}
   */
  getClothingSize: s => s.clothingSize.items,

  /**
   * Отдать: Размер обуви
   * @param {Object} s
   * @returns {Array}
   */
  getShoeSize: s => s.shoeSize.items,

  /**
   * Отдать: Цвет
   * @param {Object} s
   * @returns {Array}
   */
  getColor: s => s.color.items,

  /**
   * Отдать: Цену
   * @param {Object} s
   * @returns {Object}
   */
  getPrice: s => s.price,

  /**
 * Отдать: Цена текущий минимум
 * @param {Object} s
 * @returns {Number} цена минимум
 */
  getPriceCurrentMin: s => s.price.currentMin,

  /**
   * Отдать: Цена текущий максимум
   * @param {Object} s
   * @returns {Number} цена максимум
   */
  getPriceCurrentMax: s => s.price.currentMax,

  /**
   * Отдать: Цена минимальная возможноая
   * @param {Object} s
   * @returns {Number} цена минимум
   */
  getPriceMin: s => s.price.min,

  /**
   * Отдать: Цена максимально возможноая
   * @param {Object} s
   * @returns {Number} цена максимум
   */
  getPriceMax: s => s.price.max,

  /**
   * Отдать: Данные для запрса
   * @param {Object} s
   * @returns {Object} data
   */
  getSendData (s) {
    const data = {
      priceMin: s.price.currentMin,
      priceMax: s.price.currentMax,
      type: s.type
    }

    s.selected.forEach((item) => {
      if (!(item.type in data)) {
        data[item.type] = []
      }

      data[item.type].push(item.id)
    })

    return data
  }
}
