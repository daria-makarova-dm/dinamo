/* eslint-disable no-console */
import { mapGetters } from 'vuex'

// Mixins
import scroll from '~/mixins/scroll'

// Modal
const ModalTableSize = () => import('~/components/ModalTableSize/ModalTableSize.vue')
const AccordionMobile = () => import('~/components/widged/AccordionMobile/AccordionMobile.vue')

export default {
  name: 'TheFilter',
  mixins: [scroll],
  components: { ModalTableSize, AccordionMobile },
  props: {
    isMobile: {
      type: Boolean,
      default: false
    },
    queryParams: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      ind: 1,
      loading: false,
      table: {
        caption: 'таблица размеров',
        row: [
          ['XS', '42–44', '166–170', '88', '76'],
          ['S', '44–46', '170–176', '92', '80'],
          ['M', '46–48', '176–182', '96', '84'],
          ['L', '48–50', '182–186', '100', '88'],
          ['XL', '50–52', '184–186', '104', '92'],
          ['2XL', '52–54', '186–188', '108', '96'],
          ['3XL', '54–56', '188–190', '112', '100'],
          ['4XL', '56–58', '190–192', '116', '104'],
          ['5XL', '58–60', '192–194', '120', '108']
        ]
      },
      // typeSend: 'cards', // count, cards
      step: 5,
      modelRange: [5, 100],
      minMaxRange: { min: 0, max: 500 },
      timeId: null
    }
  },
  computed: {
    ...mapGetters('filter',
      [
        'getCategories',
        'getSelected',
        'getForwhom',
        'getSpecial',
        'getCollection',
        'getClothingSize',
        'getShoeSize',
        'getColor',
        'getPrice',
        'getCount',
        'getSendData',
        'getType'
      ]
    ),
    getQueryParams () {
      const data = {
        priceMin: this.modelRange[0],
        priceMax: this.modelRange[1]
      }

      this.getSelected.forEach((item) => {
        if (!(item.type in data)) {
          data[item.type] = []
        }

        data[item.type].push(item.query + '_' + item.value)
      })

      return data
    },
    getMinPrice () {
      return this.$options.filters.currency(this.modelRange[0])
    },
    getMaxPrice () {
      return this.$options.filters.currency(this.modelRange[1])
    }
  },
  watch: {
    modelRange (next) {
      this.$store.commit('filter/setPriceCurrentMin', next[0])
      this.$store.commit('filter/setPriceCurrentMax', next[1])
    },
    getSelected () {
      this.changeQueryParams()
    },
    scrollTop () {
      if (this.$refs.filterContRef && this.$refs.filterScrolRef) {
        // const rectContFilter = this.$refs.filterContRef.getBoundingClientRect()

        // if (rectContFilter.top <= 0) {
        //   this.$refs.filterScrolRef.style.position = 'fixed'
        //   this.$refs.filterScrolRef.style.top = '0px'
        // } else {
        //   this.$refs.filterScrolRef.style.position = ''
        //   this.$refs.filterScrolRef.style.top = ''
        // }
      }
    }
  },
  mounted () {
    this.minMaxRange = {
      min: this.getPrice.min,
      max: this.getPrice.max
    }
    this.modelRange = [this.getPrice.currentMin, this.getPrice.currentMax]
    this.$emit('loadData', this.getSendData)
  },
  methods: {

    getValuesByKey (key, max = 5) {
      const finds = this.getSelected.filter(item => item.key.includes(key)).map(item => item.value)

      if (key === 'color') {
        const colors = finds.map(val => `<span style="background: #${val}; width: 30px; height: 30px; border-radius: 25px; display: inline-block;"></span>`)

        if (colors.length > max) {
          return `${`<span style="background: #${colors[0]}; width: 30px; height: 30px; border-radius: 25px; display: inline-block;"></span>`} (+${colors.length - 1})`
        } else {
          return colors.join(' ')
        }
      } else if (finds.length > max) {
        return `${finds[0]} (+${finds.length - 1})`
      } else {
        return finds.join(', ')
      }
    },

    onSlideChange (values) {
      clearTimeout(this.timeId)
      this.timeId = setTimeout(() => {
        this.changeQueryParams()
        this.sendDataCount()
      }, 225)
    },

    changeQueryParams () {
      const query = {
        ...this.getQueryParams
      }

      for (const key in this.$route.query) {
        if (this.queryParams.includes(key)) {
          query[key] = this.$route.query[key]
        }
      }

      this.$router.push({
        path: this.$route.path,
        query
      })
    },

    /**
     * Запрос: На получение кол-во товаро для тултипа
     */
    sendDataCount () {
      // this.typeSend = 'count'
      this.$store.commit('filter/setType', 'count')
      this.$emit('filterSend', this.getSendData)
    },

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
      // this.typeSend = 'cards'
      this.$store.commit('filter/setType', 'cards')
      this.$emit('filterSend', this.getSendData)
    },

    /**
     * Изменение фильтра
     * @param {String} key ключ выбранного фильтра
     * @param {String} value значенин выбранного фильтра
     */
    changeFilter (key, value) {
      this.toggleSelected(key, value)

      if (key.split('-').includes('category')) {
        this.sendDataCards()
      } else {
        this.sendDataCount()
      }
    },

    /**
     * Получение обрезанного массива
     */
    getFromTo (array, from, to) {
      if (to) {
        return array.slice(from, to)
      }
      return array.slice(from)
    },

    /**
     * Добавить элемент в список
     */
    addSelected (key, value) {
      this.$store.dispatch('filter/addSelected', { key, value })
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

    /**
     * Проверить элемент в списке
     */
    isSelected (key) {
      return this.getSelected.findIndex(item => item.key === key) >= 0
    },

    /**
     * Изменения элемента списка
     */
    toggleSelected (key, value) {
      if (this.isSelected(key)) {
        this.removeSelected(key)
      } else {
        this.addSelected(key, value)
      }
    }
  }
}
