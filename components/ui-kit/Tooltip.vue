<template lang="pug">
  v-popover(
    :placement="placement"
    :autoHide="autoHide"
    @apply-hide="onHide"
    @apply-show="onShow"
    ref="tooltip"
    v-click-outside="onOutside"
  )
    slot(name="link")

    template(#popover)
      slot(name="content")
</template>

<script>
/* eslint-disable no-console */
export default {
  name: 'Tooltip',
  props: {
    placement: {
      type: String,
      default: 'right-start'
    },
    open: {
      type: Boolean,
      default: false
    },
    autoHide: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isOpen: this.open
    }
  },
  methods: {
    onShow () {
      this.isOpen = false
    },
    onHide () {
      if (this.isOpen) {
        this.$refs.tooltip.hide()
        this.isOpen = false
      } else {
        this.$refs.tooltip.show()
      }
    },
    onOutside () {
      this.isOpen = true
      this.$refs.tooltip.hide()
    }
  }
}
</script>

<style lang="scss">
  .popover-inner {
    background-color: $cl-cobalt;
    color: $cl-white;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 1px;
    padding: 10px 15px 14px;

    button {
      text-transform: uppercase;
      color: $cl-white;
      font-size: 10px;
      line-height: 10px;
      position: relative;
      border-bottom: 1px solid transparent;
      margin-top: 10px;
      letter-spacing: 1px;

        &:hover {
          border-bottom-color: $cl-white;
        }
    }
  }

  .popover.open {
    z-index: 2;
    margin-left: 20px
  }

  .popover-arrow {
    top: 15px;
    left: -7px;
    width: 15px;
    height: 15px;
    background: $cl-cobalt;
    transform: rotate(45deg);
    position: absolute;
    z-index: -1;
  }
</style>
