module.exports = {
  dev: false,
  buildDir: 'nuxt',
  modules: [
    '~/modules/axios-cache.js'
  ],
  plugins: [
    '~/plugins/axios-cache.server.js'
  ]
  // build: {
  //     publicPath: '/public/'
  // }
}
