import GoogleMapsApiLoader from 'google-maps-api-loader'

export default {
  props: {
    mapConfig: {
      type: Object,
      required: true
    },
    markers: {
      typeL: Array,
      required: false,
      default: null
    }
  },
  data () {
    return {
      apiKey: 'AIzaSyB2IGeV1f1z42k_o4yIVAjhc7lXrYPNbxU',
      google: null,
      map: null,
      markersArr: []
    }
  },
  watch: {
    markers () {
      this.createMap()
    }
  },
  methods: {
    initializeMap () {
      const mapContainer = this.$refs.googleMap
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig)
      if (this.markers) {
        if (Array.isArray(this.markers)) {
          this.markers.forEach((item, key) => {
            const marker = new this.google.maps.Marker({
              position: new this.google.maps.LatLng(item.location.lat, item.location.lng),
              map: this.map,
              icon: require('~/assets/image/point.svg')
            })
            this.markersArr.push(marker)
          })
        } else {
          const marker = new this.google.maps.Marker({
            position: new this.google.maps.LatLng(this.markers.location.lat, this.markers.location.lng),
            map: this.map,
            icon: require('~/assets/image/point.svg')
          })
          this.markersArr.push(marker)
        }
      }
    },
    async createMap () {
      const googleMapApi = await GoogleMapsApiLoader({
        apiKey: this.apiKey
      })

      this.google = googleMapApi
      this.initializeMap()
    }
  },
  mounted () {
    this.createMap()
  }
}
