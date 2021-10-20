<template lang="pug">
  div
    span id: {{ post.id }}
    span title: {{ post.title }}
    span slug: {{ post.slug }}
    span author: {{ post.author }}
</template>

<script>
/* eslint-disable no-console */
export default {
  name: 'PostDetail',
  async asyncData ({ route, redirect, store }) {
    const { success, data } = await store.dispatch('posts/fetchBySlug', route.params.slug)
    console.log('data: ', data)

    if (success && data.length) {
      return {
        post: data[0]
      }
    } else {
      redirect('/posts')
    }
  }
}
</script>

<style></style>
