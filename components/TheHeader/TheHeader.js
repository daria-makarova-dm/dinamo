// mixin
import scroll from '~/mixins/scroll'

const Logo = () => import('~/components/Logo/Logo.vue')
const TheMenu = () => import('~/components/menu/TheMenu/TheMenu.vue')

export default {
  name: 'TheHeader',
  mixins: [scroll],
  components: { Logo, TheMenu },
  data () {
    return {
      logo: {
        urlImage: require('~/assets/image/logo.png'),
        urlImgBig: require('~/assets/image/logo-big.png'),
        link: '/'
      },
      menu: this.$t('menu')
    }
  },
  computed: {
    isMainPage () {
      return this.$store.state.isMainPage
    },
    headerClass () {
      return {
        'scroll-top': this.scrollTop === 0,
        'main-page': this.isMainPage
      }
    }
  },
  created () {
    if (this.$router.history.current.path === '/') {
      this.$store.commit('checkMainPage', true)
    } else {
      this.$store.commit('checkMainPage', false)
    }
  }
}
