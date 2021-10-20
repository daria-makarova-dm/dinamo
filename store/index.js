
// Modules
import CardModule from './modules/cart/index'
import CatalogModule from './modules/catalog/index'
import FilterModule from './modules/filter/index'
import SearchModule from './modules/search/index'
import OrderModule from './modules/order/index'
import FavoriteModule from './modules/favorites/index'
import UserModule from './modules/user/index'

// Actions
import actions from './actions'

export default {
  modules: {
    cart: CardModule,
    catalog: CatalogModule,
    filter: FilterModule,
    search: SearchModule,
    order: OrderModule,
    favorites: FavoriteModule,
    user: UserModule
  },
  state () {
    return {
      ln: 'ru',
      isMainPage: true,
      sortValue: {},
      showValue: {},
      noScroll: {
        menu: false,
        search: false,
        clearCart: false
      }
    }
  },
  getters: {
    ln (state) {
      // Для отслеживания в других геттерах
      return state.ln
    },
    getSortValue: s => s.sortValue,
    getShowValue: s => s.showValue,
    isNoScroll (state) {
      let result = false
      const obj = state.noScroll
      for (const key in obj) {
        if (obj[key]) {
          result = true
          break
        }
      }

      return result
    }
  },
  mutations: {
    changeLn (state, payload) {
      // Смена языковой версии, происходит при загрузке компонента layouts/default
      state.ln = payload
    },
    checkMainPage (state, payload) {
      state.isMainPage = payload
    },
    setSortValue (state, payload) {
      state.sortValue = payload
    },
    setShowValue (state, payload) {
      state.showValue = payload
    },
    changeNoScroll (state, payload) {
      state.noScroll[payload.item] = payload.bool
    }
  },
  actions
}
