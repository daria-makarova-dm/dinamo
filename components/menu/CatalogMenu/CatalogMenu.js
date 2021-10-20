// Mixins
import resize from '~/mixins/resize'

// Component
const CatalogDropdown = () => import('~/components/menu/CatalogDropdown/CatalogDropdown.vue')
const CartIcon = () => import('~/components/Icons/CartIcon/CartIcon.vue')

export default {
  components: { CatalogDropdown, CartIcon },
  mixins: [resize],
  data () {
    return {
      catalogDropdownIsOpen: false
    }
  },
  watch: {
    $route (to, from) {
      this.catalogDropdownIsOpen = false
    }
  },
  computed: {
    btnLinks () {
      const obj = this.$t('menu.catalog.btnLinks')
      const newObj = []

      if (!this.desktop) {
        for (let i = 0; i < 4; i++) {
          newObj.push(obj[i])
        }
        return newObj
      }

      return obj
    }
  },
  methods: {
    toggleDropdownCatalog () {
      this.catalogDropdownIsOpen = !this.catalogDropdownIsOpen
    },
    hiddenDropdownCatalog (e) {
      const target = e.target
      if (
        target.classList.contains('b-catalog-nav__btn') ||
        !!target.closest('.b-catalog-nav__btn') ||
        target.classList.contains('b-catalog-dropdown') ||
        !!target.closest('.b-catalog-dropdown')
      ) {
        return
      }

      this.catalogDropdownIsOpen = false
    }
  }
}
