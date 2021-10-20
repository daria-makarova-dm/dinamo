const SearchIcon = () => import('~/components/Icons/SearchIcon/SearchIcon.vue')
const CloseThinIcon = () => import('~/components/Icons/CloseThinIcon/CloseThinIcon.vue')
const ArrowRightThinIcon = () => import('~/components/Icons/ArrowRightThinIcon/ArrowRightThinIcon.vue')

export default {
  components: { SearchIcon, CloseThinIcon, ArrowRightThinIcon },
  emit: ['open-search'],
  data () {
    return {
      isOpen: false,
      value: '',
      timeout: null
    }
  },
  watch: {
    isOpen (bool) {
      this.$store.commit('changeNoScroll', {
        item: 'search',
        bool
      })

      if (bool) {
        this.$emit('open-search')
      }
    }
  },
  computed: {
    openClass () {
      return { open: this.isOpen }
    },
    result () {
      return this.$store.state.search.result
    }
  },
  methods: {
    open () {
      this.isOpen = true

      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    },
    reset () {
      this.value = ''
      clearTimeout(this.timeout)
      this.$store.dispatch('search/reset')
    },
    close () {
      this.reset()
      this.isOpen = false
    },
    search (e) {
      const value = e.target.value

      if (this.timeout) {
        clearTimeout(this.timeout)
      }

      this.timeout = setTimeout(() => {
        this.$store.dispatch('search/request', value)
      }, 1000)
    },
    strong (value, string) {
      value = value.toLowerCase()
      string = string.toLowerCase()

      const idxStart = value.indexOf(string)
      const idxEnd = idxStart + string.length

      if (idxStart === -1) {
        return value
      }

      const strongStr = `<b>${value.substr(idxStart, idxEnd)}</b>`
      let newStr = `${value.substr(0, idxStart)}${strongStr}${value.substr(idxEnd)}`
      if (newStr[0] === '<') {
        newStr = newStr.replace(newStr[3], newStr[3].toUpperCase())
      } else {
        newStr = newStr.replace(newStr[0], newStr[0].toUpperCase())
      }

      return newStr
    }
  }
}
