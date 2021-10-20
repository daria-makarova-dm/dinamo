export const actions = {
  async fetch (context, params) {
    return await this.$axios.$get('promotions', params)
  },
  async fetchById (context, payload) {
    return await this.$axios.$get(`promotions/${payload.id}`)
  }
}
