import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
  namespaced: true,
  state () {
    return {
      step: 1,
      userData: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        isValid: false,
        btnIsClick: false
      },
      delivery: {
        type: 'mail'
      },
      addressData: {
        address: '',
        flat: '',
        entrance: '',
        intercom: '',
        floor: '',
        valueDaySelect: 'Воскресенье, 8 ноября',
        valueTimeSelect: 'С 10:00 до 22:00',
        isValid: false,
        btnIsClick: false
      },
      mailData: {
        address: '',
        housing: '',
        structure: '',
        flat: '',
        index: '',
        isValid: false,
        btnIsClick: false
      },
      lockFetch: false,
      cityResult: null,
      targetCity: {
        name: 'Moscow',
        en: 'Moscow',
        ru: 'Москва'
      },
      pickupPoint: null,
      targetPickupPoint: null,
      certificate: null,
      usedScores: 0,
      wayPayment: 'Картой онлайн',
      comment: ''
    }
  },
  getters,
  mutations,
  actions
}
