<template lang="pug">
  include ./TheFilterSC.pug
</template>

<script>
/* eslint-disable no-console */

const AccordionMobile = () => import('~/components/widged/AccordionMobile/AccordionMobile.vue')

export default {
  name: 'TheFilterSC',
  components: { AccordionMobile },
  props: {
    isMobile: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    queryParam: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    },
    selected: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      value: this.selected,
      timeID: null
    }
  },
  mounted () {
    this.$emit('load', this.value.value)
  },
  methods: {
    nameWithLang (cont) {
      return cont.name
    },
    onChange (cont) {
      clearTimeout(this.timeID)
      this.timeID = setTimeout(() => {
        this.onSelect(cont)
      }, 150)
    },
    onSelect (value) {
      if (this.queryParam) {
        const query = {
          ...this.$route.query
        }
        query[this.queryParam] = value.value

        this.$router.push({
          path: this.$route.path,
          query
        })
      }
      this.$emit('send', value.value)
    }
  }
}
</script>

<style lang="scss">
  @import "./TheFilterSC.scss"
</style>
