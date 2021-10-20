<template lang="pug">
  ErrorPage(:error="error")
</template>

<script>
const ErrorPage = () => import('~/components/pages/ErrorPage/ErrorPage.vue')

export default {
  components: { ErrorPage },
  layout: 'default',
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
