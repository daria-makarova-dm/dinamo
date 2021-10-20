export default {
  props: {
    linkDropdown: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      openMenu: false
    }
  },
  methods: {
    toggleMenu () {
      this.openMenu = !this.openMenu
    },
    hideMenu () {
      this.openMenu = false
    }
  }
}
