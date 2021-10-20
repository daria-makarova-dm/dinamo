<template lang="pug">
  include CollectionDetails
</template>

<script>
import CollectionItem from '~/components/collections-component/CollectionItem/CollectionItem'
export default {
  components: {
    CollectionItem
  }

}
</script>

<style lang="scss">
  @import 'CollectionDetails';
</style>
