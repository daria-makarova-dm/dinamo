export default {
  addResult (state, payload) {
    let result = payload

    if (!result) {
      state.result = false
    }

    if (result.length > 5) {
      result = result.slice(0, 5)
      result.push('Смотреть больше')
      state.result = result
    } else {
      state.result = result
    }
  },
  resetSearch (state) {
    state.result = false
  },

  /**
   * Установка: Заполняем ответ на вопрос поиска
   * @param {Object} state
   * @param {Object} payload
   */
  setSearchAnswer (state, payload) {
    state.answer = payload
  }
}
