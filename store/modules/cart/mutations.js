const findProduct = (state, id) => {
  const idxProduct = state.arrProduct.findIndex(product => product.id === id)
  const product = state.arrProduct[idxProduct]

  return product
}

export default {
  changeColorOrSize (state, payload) {
    const nameObj = payload.nameObj
    const countNewSize = payload.countNewValue

    const product = findProduct(state, payload.id)

    const currentValue = product[nameObj].target
    const newValue = product[nameObj].options[countNewSize]

    product[nameObj].target = newValue
    product[nameObj].options[countNewSize] = currentValue
  },
  changeCount (state, payload) {
    const product = findProduct(state, payload.id)

    if (payload.action === 'increment' && product.count <= product.maxCount) {
      product.count++
    }

    if (payload.action === 'decrement' && product.count > 1) {
      product.count--
    }
  },
  removeProduct (state, payload) {
    const idxProduct = state.arrProduct.findIndex(product => product.id === payload.id)
    state.arrProduct.splice(idxProduct, 1)
  },
  clearCart (state) {
    state.arrProduct = []
  }
}
