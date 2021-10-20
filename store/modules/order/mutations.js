export default {
  changeStep (state, payload) {
    if (payload === 'increment') {
      state.step++
    }

    if (payload === 'decrement') {
      state.step--
    }
  },
  changeValidData (state, payload) {
    // Мутация которая проверяет валидность объекта данных
    state[payload.obj].isValid = payload.isValid
  },
  changeBtnClickedData (state, payload) {
    // Мутация которая учитывает клик по кнопке перехода на след шаг для проверки валидности
    state[payload.obj].btnIsClick = payload.btnIsClick
  },
  changeData (state, payload) {
    // Изменяет данные вместе с инпутами
    state[payload.obj][payload.name] = payload.value
  },
  changeDeliveryType (state, type) {
    state.delivery.type = type
  },
  writeCityResult (state, payload) {
    // Записываем города
    state.cityResult = payload
  },
  chooseCity (state, payload) {
    state.targetCity = payload
  },
  loadPickupPoint (state, payload) {
    // Добавляем точки самовывоза в стейт
    state.pickupPoint = payload
  },
  choosePickupPoint (state, payload) {
    // Выбрать точку самовывоза
    state.targetPickupPoint = payload
  },
  addCertificate (state, payload) {
    state.certificate = payload
  },
  changeScoresValue (state, payload) {
    state.usedScores = payload
  },
  changeWayPayment (state, payload) {
    state.wayPayment = payload
  },
  changeComment (state, payload) {
    state.comment = payload
  }
}
