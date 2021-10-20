import {
  disablePageScroll,
  enablePageScroll,
  clearQueueScrollLocks
} from 'scroll-lock'

export default {
  name: 'Modal',
  props: {
    title: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: true
    },
    isModalVideo: {
      type: Boolean,
      default: false
    },
    noTitleBlock: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      open: false
    }
  },
  beforeDestroy () {
    this.$refs.modal.remove()
  },
  mounted () {
    this.$nextTick().then(() => {
      document.body.appendChild(this.$refs.modal)
    })
  },
  methods: {
    openModal () {
      disablePageScroll(this.$refs.modalInner)
      this.open = true
    },
    closeModal () {
      clearQueueScrollLocks()
      enablePageScroll(this.$refs.modalInner)
      this.open = false
    }
  },
  computed: {
    modifier () {
      const checkHeader = this.type === 'header'
      return { 'modal-wrapper--header': checkHeader }
    }
  }
}
