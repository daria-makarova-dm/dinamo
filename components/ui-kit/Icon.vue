<template lang="pug">
span
  svg.icon(v-if="useSvg" class="icon" aria-hidden="true")
    use(:xlink:href="iconname")
  i.b-icon.iconfont(v-else :class="getMod")
</template>

<script>
/* eslint-disable vue/no-side-effects-in-computed-properties */
export default {
  name: 'Icon',
  props: {
    type: {
      type: String,
      default: 'svg'
    },
    name: {
      type: String,
      default: '',
      required: true
    },
    mod: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      inMod: this.mod,
      msg: 'Invalid icon'
    }
  },
  computed: {
    useSvg () {
      return this.type === 'svg'
    },
    getMod () {
      const hash = this.type === 'svg' ? '#' : ''

      if (this.inMod.length) {
        this.inMod.push(`${hash}icon-${this.name}`)
        return this.inMod.map(m => `b-icon--${m}`)
      }
      return `${hash}icon-${this.name}`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
