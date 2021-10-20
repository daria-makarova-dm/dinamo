/* eslint-disable no-console */
export const actions = {
  async fetch (context) {
    try {
      const posts = await this.$axios.$get('posts')
      return {
        success: true,
        status: 'success',
        error: null,
        data: posts
      }
    } catch (error) {
      return {
        success: false,
        status: 'error',
        error,
        data: null
      }
    }
  },
  async fetchBySlug (context, payload) {
    try {
      const post = await this.$axios.$get(`posts?slug=${payload}`)
      console.log('post: ', post)
      return {
        success: true,
        status: 'success',
        error: null,
        data: post
      }
    } catch (error) {
      return {
        success: false,
        status: 'error',
        error,
        data: null
      }
    }
  }
}
