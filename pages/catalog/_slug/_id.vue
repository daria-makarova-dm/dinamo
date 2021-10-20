<template lang="pug">
  div
    span Catalog/Category/PodCategory
    br
    NuxtLink(:to="`/catalog/${$route.params.slug}`") Назад в Category
    br
    NuxtLink(to="/catalog") Назад в Catalog
</template>

<script>
/* eslint-disable no-console */
export default {
  name: 'PageCatalogCategoryPodCategory',
  fetch () {
    console.log('PageCatalogCategoryPodCategory')
  }
}
</script>

<style></style>
