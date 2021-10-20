import resize from '~/mixins/resize'

export default {
  mixins: [resize],
  data () {
    return {
      streetTimeout: null,
      isLoad: false,
      streets: [],
      checkboxFilter: {
        postomats: false,
        daily: false,
        fulltime: false
      },
      filterPVZ: null,
      searchInput: '',
      visible: 'list'
    }
  },
  computed: {
    targetCity () {
      return this.$store.state.order.targetCity
    },
    targetPickupPoint () {
      return this.$store.state.order.targetPickupPoint
    },
    markers () {
      const filterPVZ = this.filterPVZ
      const arrMarkers = []
      filterPVZ.forEach((item) => {
        const objMarker = {
          location: {
            lat: +item.lat,
            lng: +item.lng
          }
        }
        arrMarkers.push(objMarker)
      })
      return arrMarkers
    }
  },
  watch: {
    targetCity (value) {
      if (value) {
        this.loadPickupPoint()
      }
    },
    searchInput () {
      this.filtrationPVZ()
    }
  },
  methods: {
    changeCheckbox (value, data) {
      this.checkboxFilter[data] = value
      this.filtrationPVZ()
    },
    async loadPickupPoint () {
      this.isLoad = true
      await this.$store.dispatch('order/fetchPickupPoint', this.targetCity.name)
      this.isLoad = false
      this.filtrationPVZ()
    },
    filtrationPVZ () {
      const obj = this.$store.state.order.pickupPoint[this.$store.state.ln]

      const filterFunction = (value) => {
        const label = value.label
        let result = true

        const objTrueFilter = []
        for (const key in this.checkboxFilter) {
          if (this.checkboxFilter[key]) {
            objTrueFilter.push(key)
          }
        }

        for (const item of objTrueFilter) {
          if (!label.includes(item)) {
            result = false
          }
        }

        return result
      }

      const filterInput = (value) => {
        if (value.name.includes(this.searchInput) || value.address.includes(this.searchInput)) {
          return true
        }
        return false
      }

      if (!this.checkboxFilter.postomats && !this.checkboxFilter.daily && !this.checkboxFilter.fulltime) {
        this.filterPVZ = obj
        this.filterPVZ = this.filterPVZ.filter(filterInput)
        return
      }

      this.filterPVZ = obj.filter(filterFunction)
      if (this.searchInput !== '') {
        this.filterPVZ = this.filterPVZ.filter(filterInput)
      }
    },
    choosePickupPoint (point) {
      this.$store.commit('order/choosePickupPoint', point)
    },
    resetPickupPoint () {
      this.$store.commit('order/choosePickupPoint', null)
    },
    changeVisible (value) {
      this.visible = value
    }
  },
  created () {
    if (this.targetCity) {
      this.loadPickupPoint()
    }
  }
}
