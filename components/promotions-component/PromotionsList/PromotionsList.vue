<template lang="pug">
  include PromotionsList
</template>

<script>
import showMore from '~/mixins/showMore'
const ThePromotionCard = () => import('~/components/ThePromotionCard/ThePromotionCard.vue')
export default {
  name: 'Promotions',
  components: {
    ThePromotionCard
  },
  mixins: [showMore],
  props: {
    promoCards: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      inPromoCards: this.promoCards
    }
  },
  methods: {
    showMoreCards () {
      const nextPage = this.inCurrentStep + 1
      const params = {
        offset: nextPage * this.inOffset,
        page: nextPage
      }
      this.$emit('showMoreCards', params)
    }
    // async showMoreCards() {
    //   const nextPage = this.inCurrentStep + 1
    //   const params = {
    //     offset: nextPage * this.inOffset,
    //     page: nextPage
    //   }
    //   const promoList = await this.$axios.$get('http://localhost:4200/promotions/', {params})
    //   this.inPromoCards.push(...promoList)
    //   this.inCurrentStep = params.page
    //   this.inOffset = params.offset
    // }
  }
}
</script>

<style lang="scss">
  @import "PromotionsList";
</style>
