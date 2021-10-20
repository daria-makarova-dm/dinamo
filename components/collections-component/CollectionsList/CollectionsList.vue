<template lang="pug">
  include CollectionsList
</template>

<script>
const ArrowIcon = () => import('~/components/Icons/ArrowIcon/ArrowIcon.vue')

export default {
  name: 'CollectionsList',
  components: { ArrowIcon },
  props: {
    collectionsCards: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      inCollectionCards: this.collectionsCards
    }
  }
}
</script>

<style lang="scss">
  @import "./CollectionsList";
</style>
