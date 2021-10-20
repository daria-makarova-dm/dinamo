<template lang="pug">
  div.range
    client-only
      vue-range-slider(ref="range"
        v-model="model"
        height=1
        :formatter='formatter'
        :tooltip-merge="false"
        :enable-cross="false"
        :min="minMaxValue.min"
        :max="minMaxValue.max"
        @slide-end="onSlide"
        :step="step")
</template>

<script>
/* eslint-disable no-console */
import 'vue-range-component/dist/vue-range-slider.css'
let VueRangeSlider
if (process.browser) { VueRangeSlider = require('vue-range-component').default }
export default {
  name: 'VRange',
  components: {
    VueRangeSlider
  },
  model: {
    prop: 'modelRange',
    event: 'input'
  },
  props: {
    formatter: {
      type: String,
      default: '{value} P'
    },
    modelRange: {
      type: [Number, Array],
      default: 0
    },
    minMaxValue: {
      type: Object,
      default () {
        return { min: 0, max: 100 }
      }
    },
    step: {
      type: Number,
      default: 1
    }
  },
  computed: {
    model: {
      get () {
        return this.modelRange
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.range.handleKeydown = () => {}
      this.$refs.range.handleKeyup = () => {}
    })
  },
  methods: {
    onSlide (values) {
      this.$emit('slide-end', values)
    }
  }
}
</script>

<style></style>
