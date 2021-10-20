const SubmenuDropdown = () => import('~/components/menu/SubmenuDropdown/SubmenuDropdown.vue')
const ArrowTopIcon = () => import('~/components/Icons/ArrowTopIcon/ArrowTopIcon.vue')

export default {
  name: 'TheSubmenu',
  components: { SubmenuDropdown, ArrowTopIcon },
  computed: {
    visibleItem () {
      if (this.$t('menu.submenuItems')) {
        return this.$t('menu.submenuItems').slice(0, 3)
      } else {
        return this.$t('menu.submenuItems')
      }
    },
    dropdownItem () {
      if (this.$t('menu.submenuItems').length > 3) {
        return this.$t('menu.submenuItems').slice(3)
      } else {
        return false
      }
    },
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
