<template lang="pug">
  section.favorites
    h1.title--h1 Избранное

    //- Карточки
    .favorites__cards(v-if="items.length")
      .products-cards__list
        TheProductCard(
          v-for="(cart, idx) in items"
          :id="cart.id"
          :key="idx"
          :productPreviewImg="cart.productPreviewImg"
          :propFavorite="cart.favorite"
          :title="cart.title"
          :firm="cart.firm"
          :price="cart.price"
          :bestsellerLabel="cart.bestsellerLabel"
          :noveltyLabel="cart.noveltyLabel"
          :discountPrice="cart.discountPrice"
          :custom="cart.custom"
          class="products-cards__card"
          is-faf
          @toggleFavorite="onToggleFavorite"
        )

      //- Показать еще
      .favorites__show-more(v-if="showMoreBtn")
        h4.favorites__shown-products {{ inOffset }} из {{ inLength }} товаров
        button.favorites__show-more-button(@click="showMore") Показать еще

    .favorites__cards(v-else)
      template(v-if="showMoreBtn")
        BaseSpinner
      template(v-else)
        h2 Избранное пусто
</template>

<script>
/* eslint-disable no-console */

// Mixins
import showMore from '~/mixins/showMore'

// Components
const TheProductCard = () => import('~/components/TheProductCart/TheProductCart.vue')

export default {
  name: 'PageFavorites',
  components: { TheProductCard },
  mixins: [showMore],
  asyncData ({ store }) {
    return {
      inShowTo: 12,
      inLength: store.getters['favorites/getTotal'],
      items: store.getters['favorites/getItems']
    }
  },
  data () {
    return {
      items: []
    }
  },
  methods: {
    async showMore () {
      this.inCurrentStep++
      this.inOffset = this.showTo * this.inCurrentStep

      const res = await this.$store.dispatch('favorites/fetch', {
        page: this.inCurrentStep,
        limit: this.inShowTo
      })

      if (res.success) {
        this.items.push(...res.data.items)
      }
    },
    async fetchFav () {
      const res = await this.$store.dispatch('favorites/fetch')

      if (res.success) {
        this.inCurrentStep = 1
        this.inShowTo = 12
        this.inLength = res.data.total
        this.items.push(...res.data.items)
      }
    },
    onToggleFavorite (id, favorite) {
      if (!favorite) {
        this.items = this.items.filter(item => Number(item.id) !== Number(id))
      }

      if (this.items.length === 0 && this.showMoreBtn) {
        this.fetchFav()
      }
    }
  }
}
</script>

<style lang="scss">
  .favorites {
    margin-bottom: -1px;
    &__amount {
        text-transform: none;
    }
    &__show-more {
      display: flex;
      flex-direction: column;
      padding: 15px 15px 25px 15px;

      @media (min-width: $tablet) {
        padding: 20px;
      }

      @media (min-width: $desktop) {
        padding: 40px 20px;
      }
    }

    &__shown-products {
      text-align: center;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
      letter-spacing: 1px;
      margin-bottom: 10px;

        @media (min-width: $tablet) {
          font-size: 14px;
          margin-bottom: 20px;
        }
    }

    &__show-more-button {
      margin: auto;
      width: 100%;
      max-width: 330px;
      background-color: $cl-cobalt;
      color: $cl-white;
      border-radius: 20px;
      text-transform: uppercase;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 1px;
      font-weight: 500;
      padding: 10px;
      display: flex;
      justify-content: center;

      @media (min-width: $tablet) {
        max-width: 100%;
      }

      @media (min-width: $desktop-big) {
        max-width: 350px;
      }
    }
  }
  .products-cards {
    &__list {
      display: flex;
      flex-wrap: wrap;
      .product-card {
        &__text-block {
          padding: 10px 20px 15px 15px;
        }
      }
      @media (min-width: $tablet) {
        .product-card {
          width: calc(100% / 3);
          &__text-block {
            padding: 25px 15px 20px 20px;
          }
        }
      }
      @media (min-width: $desktop) {
        .product-card {
          width: calc(100% / 4);
          &__text-block {
            padding: 20px 55px 40px 20px;
          }
        }
      }
      @media (min-width: $desktop-big) {
        .product-card {
          width: calc(100% / 5);
          &__text-block {
            padding: 25px 80px 25px 20px;
          }
        }
      }
    }
  }

  .title {
    &--h1 {
      border-bottom: 1px solid $cl-cobalt;
      @media (min-width: $tablet) {
        font-size: 56px;
        line-height: 60px;
        padding: 20px;
      }
    }
  }

  @media (min-width: $tablet) {

    .favorites {
      &__cards {
        width: 100%;
      }

      &__content-wrapper {
        display: flex;
      }
    }
  }
</style>
