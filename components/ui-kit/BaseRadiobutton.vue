<template lang="pug">
  .b-radiobtn(@click.stop="toggleCheck" :class="{active: isSelected}")
    label.b-radiobtn__label
      input.b-radiobtn__input(type="radio" v-bind="{ id, name, disabled, required, value, checked: isSelected }")
      span.b-radiobtn__text
        .b-radiobtn__circle
        slot
</template>

<script>
export default {
  name: 'BaseRadiobutton',
  model: {
    prop: 'model',
    event: 'change'
  },
  props: {
    model: {
      type: [String, Number, Boolean, Object],
      default: ''
    },
    value: {
      type: [String, Number, Boolean, Object],
      default: 'on'
    },
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    required: Boolean,
    disabled: Boolean
  },
  data: () => ({
    rippleActive: false
  }),
  computed: {
    isSelected () {
      return this.model === this.value
    }
  },
  methods: {
    toggleCheck () {
      if (!this.disabled) {
        this.rippleActive = true
        this.$emit('change', this.value)
      }
    }
  }
}
</script>

<style lang="scss">
  .b-radiobtn {
    position: relative;
    &__label {
      color: $cl-white;
      padding: 10px 15px;
      display: block;
      background: transparent;
    }
    &__input {
      position: absolute;
      opacity: 0;
      pointer-events: none;
      z-index: -1;
    }
    &__text {
      position: relative;
      padding-left: 22px;
      cursor: pointer;
      display: inline-block;
      font-size: 12px;
      line-height: 20px;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    &__circle {
      position: absolute;
      border: 1px solid $cl-white;
      border-radius: 50%;
      left: 0;
      top: 3px;
      width: 12px;
      height: 12px;
      z-index: 0;
      top: 0px;
      bottom: 0px;
      margin: auto;
      &::after {
        border-radius: 50%;
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 6px;
        height: 6px;
        z-index: 0;
        background: $cl-white;
        opacity: 0;
        transition: .3s ease;
      }
    }
    &.active &{
      &__circle::after {
        opacity: 1;
      }
      &__label{
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }
</style>
