export default {
  arrProduct (state) {
    return state.arrProduct
  },
  allCountMessage (state, getters, _, rootGetters) {
    // Склонения кол-ва товаров на en и ru версиях
    let count = 0
    const lang = rootGetters.ln
    for (const product of state.arrProduct) {
      count += product.count
    }

    const stringCount = String(count)
    const lastNumCount = Number(stringCount[stringCount.length - 1])

    if (lang === 'ru') {
      if (lastNumCount === 1 && (count < 10 || count > 20)) {
        return `${count} товар`
      } else if (lastNumCount < 5 && (count < 10 || count > 20)) {
        return `${count} товара`
      }
      return `${count} товаров`
    }

    if (count === 1) {
      return `${count} product`
    }
    return `${count} products`
  },
  removeAllMessage (_, getters, _1, rootGetters) {
    // Сообщение в модалке "очистить корзину"
    const lang = rootGetters.ln
    const count = getters.allCountMessage
    if (lang === 'ru') {
      return `Вы действительно хотите удалить из корзины ${count}?`
    }
    return `Are you sure you want to remove ${count} from your shopping cart?`
  },
  count (state) {
    let count = 0
    for (const product of state.arrProduct) {
      count += product.count
    }
    return count
  },
  allPrice (state) {
    let price = 0
    for (const product of state.arrProduct) {
      price += product.price.value * product.count
    }
    return price.toString()
  },
  allDiscountPrice (state) {
    let price = 0
    for (const product of state.arrProduct) {
      if (product.price.discount) {
        price += (product.price.value - product.price.discount) * product.count
      }
    }
    return price.toString()
  },
  finalPrice (_, getters) {
    return (Number(getters.allPrice) - Number(getters.allDiscountPrice)).toString()
  }
}
