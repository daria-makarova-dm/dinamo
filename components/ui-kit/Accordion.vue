<template lang="pug">
  .accordion
    .accordion__head(@click="open = !open" :class="open ? 'open' : ''")
      .accordion__arrow
      slot(name="link")
    transition(
      name="accordion"
      v-on:before-enter="beforeEnter" v-on:enter="enter"
      v-on:before-leave="beforeLeave" v-on:leave="leave"
    )
      .accordion__body(:class="open ? 'open' : ''" v-show="open")
        slot(name="content")
</template>

<script>
export default {
  name: 'Accordion',
  components: {
  },
  data: () => ({
    open: false
  }),
  methods: {
    beforeEnter (el) {
      el.style.height = '0'
    },
    enter (el) {
      el.style.height = el.scrollHeight + 'px'
    },
    beforeLeave (el) {
      el.style.height = el.scrollHeight + 'px'
    },
    leave (el) {
      el.style.height = '0'
    }
  }
}
</script>

<style lang="scss">
  .accordion{
    padding: 0 20px;
    margin-bottom: 10px;
    &__head {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: $cl-cobalt;
      position: relative;
      font-weight: 500;
      cursor: pointer;

      &.open {
        .accordion__arrow {
          transform: rotate(180deg);
        }
      }
    }
    &__arrow{
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      right: 0;
      background-image: url('~/assets/image/arrow-button.svg');
      width: 12px;
      height: 7px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    &__body {
      padding-left: 30px;
      ul{
        padding:0;
      }
      li{
        list-style: none;
        padding: 0;
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 1px;
        text-transform: uppercase;
        padding-top: 5px;
        color: $cl-cobalt;
        &::before{
          display: none;
        }
      }
      a{
        color: $cl-cobalt;
      }
    }

    @media (min-width: $tablet) {

      padding-right: 45px;

      &__arrow {
        right: -15px;
      }
    }

    @media (min-width: $desktop) {

      &__arrow {
        right: -12px;
      }
    }

    @media (min-width: $desktop-big) {

      &__arrow {
        right: -22px;
      }
    }
  }
</style>
