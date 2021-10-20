import 'vue-plyr/dist/vue-plyr.css'

export default {
  data () {
    return {
      plyrOptions: {
        controls: [
          'play',
          'progress',
          'current-time',
          'volume',
          'fullscreen'
        ]
      }
    }
  },
  props: {
    videosrc: {
      type: String,
      required: true
    }
  }
}
