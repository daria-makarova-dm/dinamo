<template lang="pug">
  div
    NuxtLink(
      v-for="post in posts"
      :key="post.slug"
      :to="{ path: `/posts/${post.slug}`, params: { slug: post.slug }}"
    ) {{ post.title }}

</template>

<script>
/* eslint-disable no-console */
export default {
  name: 'Posts',
  async asyncData ({ store }) {
    const { success, data } = await store.dispatch('posts/fetch')

    return {
      posts: success ? data : []
    }
  }
}
</script>

<style></style>
