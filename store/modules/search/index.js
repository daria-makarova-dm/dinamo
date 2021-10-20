import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export default {
  namespaced: true,
  state () {
    return {
      result: null,
      headerValue: '',
      answer: {
        cards: {
          total: 0,
          itens: []
        },
        images: {
          total: 0,
          itens: []
        },
        promotions: {
          total: 0,
          itens: []
        }
      }
    }
  },
  getters,
  actions,
  mutations
}
