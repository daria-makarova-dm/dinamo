<template lang="pug">
  IndexPage
</template>

<script>
const IndexPage = () => import('~/components/pages/Index/Index.vue')

export default {
  components: { IndexPage },
  beforeRouteEnter (_, _2, next) {
    next((vm) => {
      vm.$store.commit('checkMainPage', true)
    })
  },
  beforeRouteLeave (_, _2, next) {
    this.$store.commit('checkMainPage', false)
    next()
  }
}
</script>
