import Vue from 'vue'

// Click Outside https://github.com/vue-bulma/click-outside
import vClickOutside from 'v-click-outside'

// Validation https://vuelidate.js.org/
import Vuelidate from 'vuelidate'

// Tooltip
import VTooltip from 'v-tooltip'

// Swiper
// Example for use: https://github.surmon.me/vue-awesome-swiper/
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

// Filters
import currencyFilter from '@/filters/curency.filter'

// Phone Mask https://webinmind.ru/nuxtjs/plaginy/vue-input-facade
import InputFacade from 'vue-input-facade'

Vue.use(VTooltip)
Vue.use(vClickOutside)
Vue.use(VueAwesomeSwiper)
Vue.use(Vuelidate)
Vue.filter('currency', currencyFilter)
Vue.use(InputFacade)
