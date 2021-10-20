<template lang="pug">
  include ./Menu.pug
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      open: false
    }
  },
  watch: {
    open (next) {
      if (process.browser) {
        document.body.classList.toggle('no-scroll', next)
        document.body.style.overflow = next ? 'hidden' : ''
      }
    }
  }
}
</script>

<style lang="scss">
  @import "./Menu.scss";
</style>
