export default {

  /**
   * Отдать: Спиксо Избранного
   * @param {Object} s
   * @returns {Array<Object>}
   */
  getItems: s => s.items,

  /**
   * Отдать: Число максимального кол-во Избранных
   * @param {Object} s
   * @returns {Number}
   */
  getTotal: s => s.total
}
