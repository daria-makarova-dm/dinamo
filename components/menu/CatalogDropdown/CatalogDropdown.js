const SectionCatalogDropdown = () => import('~/components/menu/SectionCatalogDropdown/SectionCatalogDropdown.vue')

export default {
  components: { SectionCatalogDropdown },
  provide () {
    return {
      nextLvl: this.nextLvl
    }
  },
  data () {
    return {
      history: [
        'menu.catalog.dropdown'
      ]
    }
  },
  methods: {
    nextLvl (lvl, idx) {
      this.history = this.history.slice(0, lvl)
      this.history.push(this.history[lvl - 1] + `[${idx}].nextLvlDropdown`)
    }
  }
}
