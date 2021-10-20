<template lang="pug">
  div
    span Catalog/category
    br
    NuxtLink(to="/catalog") Назад в Catalog
</template>

<script>
/* eslint-disable no-console */
export default {
  name: 'PageCatalogCategory',
  fetch () {
    console.log('PageCatalogCategoryPodCategory')
  }
}
</script>

<style></style>
