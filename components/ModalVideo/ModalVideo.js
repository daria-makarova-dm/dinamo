const Video = () => import('~/components/Video/Video.vue')

export default {
  components: { Video },
  props: {
    isFullContainer: {
      type: Boolean
    },
    videoposter: {
      type: String,
      required: true
    },
    videosrc: {
      type: String,
      required: true
    },
    noTitleBlock: {
      type: Boolean
    },
    isModalVideo: {
      type: Boolean
    }
  }
}
