const { setupCache } = require('axios-cache-adapter')

module.exports = function () {
  const cache = setupCache({
    // See https://github.com/RasCarlito/axios-cache-adapter/#options
  })

  this.nuxt.hook('vue-renderer:ssr:prepareContext', (ssrContext) => {
    ssrContext.$axiosCache = cache
  })
}