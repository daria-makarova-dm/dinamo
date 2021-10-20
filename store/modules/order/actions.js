export default {
  nextstep (context) {
    context.commit('changeStep', 'increment')
  },
  backstep (context) {
    context.commit('changeStep', 'decrement')
  },
  async fetchCity (context, value) {
    const url = 'https://dinamo-c73bf-default-rtdb.firebaseio.com/cities.json'
    if (value === '') {
      context.commit('writeCityResult', [])
      // Запрещаем выводиться запросам, которые были начаты раньше
      context.lockFetch = true
      return
    }

    context.lockFetch = false
    const response = await fetch(url)

    if (!response.ok) {
      const err = new Error(response.message || 'failed fetch')
      throw err
    }

    const json = await response.json()
    if (!context.lockFetch) {
      context.commit('writeCityResult', json)
    }
  },
  async fetchPickupPoint (context, value) {
    const url = `https://dinamo-c73bf-default-rtdb.firebaseio.com/pickUpPoints/${value}.json`
    // Получаем точки самовывоза в городе
    const response = await fetch(url)

    if (!response.ok) {
      const err = new Error(response.message || 'failed fetch')
      throw err
    }

    const json = await response.json()
    context.commit('loadPickupPoint', json)
  }
}
