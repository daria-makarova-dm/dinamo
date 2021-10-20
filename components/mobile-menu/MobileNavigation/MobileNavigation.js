const UserIcon = () => import('~/components/Icons/UserIcon/UserIcon.vue')
const FavoriteIcon = () => import('~/components/Icons/FavoriteIcon/FavoriteIcon.vue')
const ArrowRightIcon = () => import('~/components/Icons/ArrowRightIcon/ArrowRightIcon.vue')
const ArrowLeftIcon = () => import('~/components/Icons/ArrowLeftIcon/ArrowLeftIcon.vue')
const ArrowTopIcon = () => import('~/components/Icons/ArrowTopIcon/ArrowTopIcon.vue')

export default {
  components: { UserIcon, FavoriteIcon, ArrowRightIcon, ArrowLeftIcon, ArrowTopIcon },
  data () {
    return {
      history: ['menu.catalog.dropdown'],
      activeMenuName: 'menu.catalog.dropdown'
    }
  },
  computed: {
    activeMenu () {
      return this.$t(this.history.join(''))
    },
    submenu () {
      // Опр-ляем переходили ли мы хотя бы раз в сабменю
      return this.history.length > 1
    },
    currentMenu () {
      if (this.submenu) {
        const currentMenu = this.history
          .join('')
          .split('.')

        const idx = currentMenu.length - 1
        return this.$t(currentMenu.slice(0, idx).join('.'))
      }

      return false
    },
    currentMenuName () {
      if (this.currentMenu) {
        return this.currentMenu.name
      }
    },
    currentMenuLink () {
      if (this.currentMenu) {
        return this.currentMenu.link
      }
    },
    bottomLinks () {
      return this.$t('menu.bottomMobileLinks')
    }
  },
  methods: {
    immersion (idx) {
      // Погружаемся на уровень ниже
      this.history.push(`[${idx}].nextLvlDropdown`)
    },
    surfacing () {
      // Всплытие на один уровень выше
      const idx = this.history.length - 1
      this.history = this.history.slice(0, idx)
    }
  }
}
