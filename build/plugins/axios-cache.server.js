module.exports = function ({ $axios, ssrContext }) {
  $axios.defaults.adapter = ssrContext.$axiosCache.adapter
}