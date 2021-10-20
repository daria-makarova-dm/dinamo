const TheSubmenu = () => import('~/components/menu/TheSubmenu/TheSubmenu.vue')
const MenuPartner = () => import('~/components/menu/MenuPartner.vue')
const CatalogMenu = () => import('~/components/menu/CatalogMenu/CatalogMenu.vue')
const MenuUserButtons = () => import('~/components/menu/MenuUserButton/MenuUsersButton.vue')

export default {
  name: 'TheMenu',
  components: {
    TheSubmenu,
    MenuPartner,
    CatalogMenu,
    MenuUserButtons
  },
  methods: {
    partnerSize (size) {
      if (size === 'short') {
        return 'b-menu__item--partner-short'
      }
      if (size === 'long') {
        return 'b-menu__item--partner-long'
      }
    }
  }
}
