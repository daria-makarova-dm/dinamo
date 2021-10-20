const MobileNavigation = () => import('~/components/mobile-menu/MobileNavigation/MobileNavigation.vue')
const MenuSearch = () => import('~/components/menu/MenuSearch/MenuSearch.vue')
const SearchIcon = () => import('~/components/Icons/SearchIcon/SearchIcon.vue')
const CartIcon = () => import('~/components/Icons/CartIcon/CartIcon.vue')

export default {
  components: { MobileNavigation, MenuSearch, SearchIcon, CartIcon },
  data () {
    return {
      menuIsOpen: false
    }
  },
  watch: {
    menuIsOpen (bool) {
      this.$store.commit('changeNoScroll', {
        item: 'menu',
        bool
      })
    }
  },
  methods: {
    toggleMenu () {
      this.menuIsOpen = !this.menuIsOpen
    },
    closeMenu () {
      this.menuIsOpen = false
    }
  },
  computed: {
    cartProductCount () {
      return this.$store.getters['cart/count']
    }
  }
}
