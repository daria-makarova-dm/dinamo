<template lang="pug">
  include ./AccordionMobile.pug
</template>

<script>
export default {
  name: 'AccordionMobile',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      open: this.value
    }
  },
  methods: {
    onToggle () {
      this.open = !this.open

      if (this.open) {
        this.$emit('open', true)
      } else {
        this.$emit('close', false)
      }
    }
  }
}
</script>

<style lang="sass">
  @import "./AccordionMobile.scss"
</style>
