<template lang="pug">
  div
    div(ref="list")
      slot(name="show")
    transition(
      name="dropdown"
      v-on:before-enter="beforeEnter" v-on:enter="enter"
      v-on:before-leave="beforeLeave" v-on:leave="leave"
    )
      div(v-if="open")
        slot(name="hide")
    span(@click="open = !open").show-hide-more {{ open ? 'Скрыть все' : 'Показать все' }}
</template>

<script>
export default {
  name: 'ShowHideMore',
  data () {
    return {
      open: false
    }
  },
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

<style>

.dropdown-enter-active, .dropdown-leave-active {
  transition: height .5s;
  overflow: hidden;
}

.show-hide-more {
  text-transform: uppercase;
  display: block;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 1px;
  margin-top: 20px;
}

</style>
