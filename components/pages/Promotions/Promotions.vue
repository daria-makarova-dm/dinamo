<template lang="pug">
  include ./Promotions
</template>

<script>
const PromotionsList = () => import('~/components/promotions-component/PromotionsList/PromotionsList')
export default {
  name: 'PagePromotions',
  components: {
    PromotionsList
  },
  async asyncData ({ store }) {
    const promoCards = await store.dispatch('promotions/fetch')
    // console.log('promoCards', promoCards)
    return { promoCards }
  },
  data () {
    return {
      promoCards: [
        {
          id: 1,
          start: '29 мар',
          end: '29 апр',
          url: require('~/assets/image/preview-second-catalog.png'),
          title: '–15% на всю верхнюю одежду',
          description: 'Покупайте любую вещь из категории «Верхняя одежда» и получите скидку 15% при оплате онлайн'
        },
        {
          id: 2,
          start: '29 мар',
          end: '29 апр',
          title: 'Осенняя распродажа',
          preview: 'Покупайте любую вещь из категории «Верхняя одежда» и получите скидку 15% при оплате онлайн',
          description: 'Покупайте любую вещь из категории «Верхняя одежда» и получите скидку 15% при оплате онлайн'
        },
        {
          id: 3,
          start: '29 мар',
          end: '29 апр',
          url: require('~/assets/image/preview-second-catalog.png'),
          title: 'Удваиваем баллы за покупку!',
          preview: 'Двойное напчисление баллов при покупке любого товара, участвующего в акции',
          description: 'Двойное напчисление баллов при покупке любого товара, участвующего в акции'
        },
        {
          id: 4,
          start: '29 мар',
          end: '29 апр',
          url: require('~/assets/image/preview-second-catalog.png'),
          title: 'Осенняя распродажа',
          preview: 'Покупайте любую вещь из категории «Верхняя одежда» и получите скидку 15% при оплате онлайн',
          description: 'Покупайте любую вещь из категории «Верхняя одежда» и получите скидку 15% при оплате онлайн'
        },
        {
          id: 5,
          start: '29 мар',
          end: '29 апр',
          url: require('~/assets/image/preview-second-catalog.png'),
          title: 'Удваиваем баллы за покупку!',
          preview: 'Двойное напчисление баллов при покупке любого товара, участвующего в акции',
          description: 'Двойное напчисление баллов при покупке любого товара, участвующего в акции'
        }
      ]
    }
  },
  methods: {
    // async getMoreCards(params, {store}) {
    //   const promoList = await store.dispatch('promotions/fetch', {params: params})
    //   console.log('promoList', promoList)
    //   // нужно проверить что приходит с сервера массив или объект
    //   this.promoCards.push(promoList)

    // this.inCurrentStep = params.page
    // this.inOffset = params.offset
    // }
  }
}
</script>

<style lang="scss">
  @import "./Promotions";
</style>
