<template lang="pug">
  vuescroll
    div
      slot
</template>

<script>

import vuescroll from 'vuescroll'
import 'vuescroll/dist/vuescroll.css'

export default {
  components: {
    vuescroll
  },
  props: {
    classes: {
      type: String,
      default: 'scroll-hidden scroll-modal'
    }
  }
}
</script>

<style lang="scss"></style>
