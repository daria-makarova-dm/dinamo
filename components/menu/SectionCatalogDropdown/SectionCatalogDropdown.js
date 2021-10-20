const ArrowRightThinIcon = () => import('~/components/Icons/ArrowRightThinIcon/ArrowRightThinIcon.vue')

export default {
  components: { ArrowRightThinIcon },
  inject: ['nextLvl'],
  props: {
    lvl: {
      type: Number,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      activeImageIdx: false,
      activeBtnIdx: false
    }
  },
  computed: {
    selectImage () {
      if (!this.activeImageIdx) {
        return false
      }

      return this.data[this.activeImageIdx].imagePreview
    }
  },
  methods: {
    changeActiveImg (idx) {
      this.activeImageIdx = idx
    },
    changeActiveBtn (lvl, idx) {
      this.activeBtnIdx = idx
      this.nextLvl(lvl, idx)
    }
  }
}
