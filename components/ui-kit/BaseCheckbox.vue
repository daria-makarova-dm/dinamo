<template lang="pug">
  .b-checkbox
    input.b-checkbox__input(type="checkbox" :id="id" :name="name" v-model="inChecked" @input="check")
    label.b-checkbox__label(:for="id" :class="{active: inChecked}")
      span.b-checkbox__text(:class="{active: inChecked}")
        slot
</template>

<script>
export default {
  name: 'BaseCheckbox',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: 'input'
    },
    name: {
      type: String,
      default: 'input'
    }
  },
  data () {
    return {
      inChecked: this.checked
    }
  },
  watch: {
    checked (next) {
      this.inChecked = next
    }
  },
  methods: {
    check () {
      this.inChecked = !this.inChecked
      this.$emit('input', this.inChecked)
    }
  }
}
</script>

<style scoped lang="scss">
  .b-checkbox {
    position: relative;
    z-index: 1;
    transition: all 0.3s;
    cursor: pointer;

    &__label {
      padding: 10px 15px;
      display: block;
      background: transparent;
    }
    &__text {
      font-size: 12px;
      line-height: 20px;
      letter-spacing: 1px;
      text-transform: uppercase;
      position: relative;
      padding-left: 22px;
      color: $cl-cobalt;
      transition: all 0.3s;

      &::before{
        content: '';
        position: absolute;
        width: 12px;
        height: 12px;
        border: 1px solid $cl-white;
        top: 0;
        left: 0;
      }
      &::after {
        position: absolute;
        content: '';
        top: 2px;
        left: 1px;
        width: 5px;
        height: 8px;
        border-top: 2px solid transparent;
        border-left: 2px solid transparent;
        border-right: 2px solid #fff;
        border-bottom: 2px solid #fff;
        transform: rotateZ(37deg);
        transform-origin: 100% 100%;
        z-index: 1;
        border-radius: 1px;
        bottom: 0;
        opacity: 0;
        transition: .3s;
      }
    }
    &__input {
      opacity: 0;
      position: absolute;
      z-index: -1;
      &:checked+label{
        background: rgba(255, 255, 255, 0.2);
        .b-checkbox__text{
          &::after {
            opacity: 1;
          }
        }
      }
    }
    &--light &{
      &__text {
        color: $cl-cobalt;
        &::before{
          border-color: $cl-cobalt;
        }
        &::after {
          border-right-color: $cl-cobalt;
          border-bottom-color: $cl-cobalt;
        }
      }
      &__label {
        padding: 5px 0;
      }
      &__input {
        &:checked+label{
          background: none;
        }
      }
    }
    &--nouppercase &{
      &__text {
        text-transform: unset;
      }
    }
    &--color &{
      &__text{
        padding-left: 0;
        display: flex;
        align-items: center;
        &::before{
          display: none;
        }
      }
      &__color {
        display: inline-block;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        margin-right: 10px;
        position: relative;
        &::before{
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          top: 0;
          bottom: 0;
          right: -3px;
          z-index: -1;
          margin: auto;
          border: 1px solid #FFFFFF;
          border-radius: 50%;
        }
      }
      &__input {
        &:checked+label{
        }
      }
    }

    @media (min-width: $tablet) {
      &__text {
        color: $cl-cobalt;
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;

        &::before {
          border: 1px solid $cl-cobalt;
          top: 2px;
        }

        &::after {
          border-right: 2px solid $cl-cobalt;
          border-bottom: 2px solid $cl-cobalt;
        }
      }

      &__label {
        padding: 0;
      }
    }
  }
</style>
