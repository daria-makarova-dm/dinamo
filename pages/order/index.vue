<template lang="pug">
  OrderPage
</template>

<script>
const OrderPage = () => import('~/components/pages/Order/Order.vue')
export default {
  components: { OrderPage },
  beforeRouteEnter (_, to, next) {
    if (to.path.includes('cart')) {
      next()
    } else {
      next('/')
    }
  }
}
</script>
