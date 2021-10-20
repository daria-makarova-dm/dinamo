import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
  namespaced: true,
  state () {
    return {
      scores: 6000,
      certificates: [
        {
          name: 'Сертификат на 1 000 ₽',
          value: 1000
        }
      ]
    }
  },
  getters,
  mutations,
  actions
}
