// Vuex
import { mapGetters } from 'vuex'

const MenuSearch = () => import('~/components/menu/MenuSearch/MenuSearch.vue')
const FavoriteIcon = () => import('~/components/Icons/FavoriteIcon/FavoriteIcon.vue')
const UserIcon = () => import('~/components/Icons/UserIcon/UserIcon.vue')

export default {
  components: { MenuSearch, FavoriteIcon, UserIcon },
  data () {
    return {
      isFaforites: false
    }
  },
  computed: {
    ...mapGetters('favorites', [
      'getItems'
    ])
  },
  watch: {
    getItems (next) {
      this.isFaforites = next.length > 0
    }
  },
  mounted () {
    this.isFaforites = this.getItems.length > 0
  }
}
