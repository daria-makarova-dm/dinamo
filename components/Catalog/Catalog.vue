<template lang="pug">
  include ./Catalog.pug
</template>

<script>
/* eslint-disable no-console */

// Store
import { mapGetters } from 'vuex'

// Mixins
import showMore from '~/mixins/showMore'
import resize from '~/mixins/resize'

// Components
const TheFilter = () => import('~/components/TheFilter/TheFilter.vue')
const Menu = () => import('~/components/widged/Menu/Menu.vue')
const AccordionMobile = () => import('~/components/widged/AccordionMobile/AccordionMobile.vue')
const TheFilterSC = () => import('~/components/TheFilterSC/TheFilterSC.vue')
const TheProductCard = () => import('~/components/TheProductCart/TheProductCart.vue')

export default {
  name: 'ComponentCatalog',
  components: {
    TheFilter,
    TheProductCard,
    TheFilterSC,
    Menu,
    AccordionMobile
  },
  mixins: [showMore, resize],
  props: {
    isTitleLength: {
      type: Boolean,
      default: true
    },
    search: {
      type: String,
      default: ''
    },
    queryParams: {
      type: Array,
      default: () => [
        'sorting',
        'shown'
      ]
    },
    showParams: {
      type: Object,
      default: () => ({
        shown: ''
      })
    },
    sortParams: {
      type: Object,
      default: () => ({
        sorting: ''
      })
    },
    title: {
      type: String,
      default: ''
    },
    showList: {
      type: Array,
      default: () => []
    },
    showValue: {
      type: Object,
      default: () => ({})
    },
    sortList: {
      type: Array,
      default: () => []
    },
    sortValue: {
      type: Object,
      default: () => ({})
    },
    cards: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      inCards: this.cards,
      flag: '',
      inShowParams: this.showParams,
      inSortParams: this.sortParams,
      filterParams: {}
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  computed: {
    ...mapGetters('filter', [
      'getCount',
      'getCategories',
      'getSelected',
      'getSendData'
    ])
  },
  watch: {
    cards (next) {
      this.inCards = next
    }
  },
  methods: {
    /**
     * Запрос: Когда мы удалим один или все, нужно сделать запрос
     * @param {String} key
     * @param {String} typeRemove может быть one - один или all - все
     */
    sendRemoveData (typeRemove, key) {
      if (this.getSelected.length) {
        if (typeRemove === 'one') {
          this.removeSelected(key)
        } else if (typeRemove === 'all') {
          this.removeSelectedAll()
        }
        this.sendDataCards()
      }
    },

    /**
     * Запрос: "Показать" в тултипе кнопка
     * Запрос: Когда отчищается выбранные фильтры: один или все
     */
    sendDataCards () {
      this.$store.commit('filter/setType', 'cards')
      this.filterSetParams(this.getSendData)
    },

    /**
     * Удалить элемент из списка
     */
    removeSelected (key) {
      this.$store.dispatch('filter/removeSelected', key)
    },

    /**
     * Удалить все элементы из списка
     */
    removeSelectedAll () {
      this.$store.dispatch('filter/removeSelectedAll')
    },
    showSetParams (params) {
      this.flag = 'show'
      this.inShowParams = { shown: params }
      this.$cookies.set('shown', params)
      // this.sendData()
    },
    sortedSetParams (params) {
      this.flag = 'sort'
      this.inSortParams = { sorting: params }
      this.sendData()
    },
    filterSetParams (params) {
      this.flag = 'filter'
      this.filterParams = params
      this.sendData()
    },
    async showMore () {
      const nextPage = this.inCurrentStep + 1
      const data = {
        ...this.filterParams,
        ...this.inSortParams,
        // ...this.inShowParams,
        page: nextPage
      }

      if (this.search && this.search.replace(/\s/g, '').length) {
        data.q = this.search
      }

      const res = await this.$store.dispatch('catalog/fetch', data)

      if (res.success && res.data.items.length) {
        this.inCards.push(...res.data.items)
        this.inCurrentStep = nextPage
        this.inOffset += this.inShowParams.shown
      }
    },
    async sendData () {
      const data = {
        ...this.filterParams,
        ...this.inSortParams,
        // ...this.inShowParams,
        page: this.inCurrentStep
      }

      if (this.search && this.search.replace(/\s/g, '').length) {
        data.q = this.search
      }

      const res = await this.$store.dispatch('catalog/fetch', data)

      if (res.success && data.type === 'cards') {
        this.inCards = res.data.items
        this.inCurrentStep = 1
        this.inOffset = this.inShowParams.shown
      }
    }
  }
}
</script>

<style lang="scss">
  @import "./Catalog.scss";
</style>
