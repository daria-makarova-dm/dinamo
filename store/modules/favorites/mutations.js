export default {

  /**
   * Установка: Спикос Избранного
   * @param {Object} state
   * @param {Array<Object>} payload
   */
  setItems (state, payload) {
    state.items = payload
  },

  /**
   * Установка: Число максимального кол-во Избранных
   * @param {Object} state
   * @param {Number} payload
   */
  setTotal (state, payload) {
    state.total = payload
  }
}
