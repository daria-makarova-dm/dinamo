<template lang="pug">
  .product-card
    .product-card__img-wrap
      img.product-card__img(:src="productPreviewImg", :title="title" :alt="title")
      button.product-card__favorite-btn(v-if="favorite" @click="toggleFavorite")
        img.product-card__favorite-img(src="@/assets/image/favorite-star-active.svg")
      button.product-card__favorite-btn(v-else @click="toggleFavorite")
        img.product-card__favorite-img(src="@/assets/image/favorite-star.svg")
      p.product-card__label(v-if="discountPrice") {{ $t('card.discountLabel') }}
      p.product-card__label(v-else-if="bestsellerLabel") {{ $t('card.bestsellerLabel') }}
      p.product-card__label(v-else-if="noveltyLabel") {{ $t('card.noveltyLabel') }}
    .product-card__text-block
      img.product-card__custom-icon(v-if="custom" src="@/assets/image/custom-icon.svg")
      .product-card__description-block
        h3.product-card__title {{ title.trim() }}
        p.product-card__firm(v-if="firm && title.trim().length < 30") {{ firm }}
      .product-card__price-block
        p.product-card__price {{ price | currency }}
        p.product-card__price-discount(v-if="discountPrice") {{ discountPrice | currency }}
</template>

<script>
export default {
  props: {
    productPreviewImg: {
      type: String,
      required: true
    },
    propFavorite: {
      // заменить позже на данные из БД
      type: Boolean,
      required: false,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    firm: {
      type: [String, Boolean],
      default: false
    },
    price: {
      type: [Boolean, String],
      required: true
    },
    bestsellerLabel: {
      type: Boolean,
      default: false
    },
    noveltyLabel: {
      type: Boolean,
      default: false
    },
    discountPrice: {
      type: [String, Boolean],
      default: false
    },
    custom: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      favorite: this.propFavorite
    }
  },
  methods: {
    toggleFavorite () {
      this.favorite = !this.favorite
      // Добавить логику добавления в избранное
    }
  }
}
</script>

<style lang="scss">
  button {
    background: none;
    border: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }

  .product-card {
    width: calc(100% / 3);
    text-align: left;

    &__img-wrap {
      width: 100%;
      position: relative;
      line-height: 0;
    }

    &__img {
      width: 100%;
    }

    &__favorite-btn {
      position: absolute;
      top: 20px;
      right: 20px;
    }

    &__label {
      position: absolute;
      top: 20px;
      left: 20px;
      text-align: center;
      height: 30px;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 17.2px;
      line-height: 1.16;
      color: $cl-white;
      padding: 5px 10px;
      background: $cl-cobalt;
      transform-origin: left top;
      transform: rotate(-90deg) translateX(-100%);
    }

    &__text-block {
      width: 100%;
      padding: 20px;
      padding-right: 50px;
      position: relative;
    }

    &__custom-icon {
      position: absolute;
      right: 20px;
      top: 20px;
    }

    &__description-block {
      margin-bottom: 10px;
    }

    &__title {
      font-size: 16px;
      line-height: 1.25;
      color: $cl-cobalt;
      margin-bottom: 0;
    }

    &__firm {
      font-size: 16px;
      line-height: 1.25;
      color: #9daebc;
      margin-bottom: 0;
    }

    &__price-block {
      display: flex;
      align-items: center;
    }

    &__price {
      font-size: 20px;
      line-height: 1.25;
      margin-right: 15px;
      color: $cl-cobalt;
    }

    &__price-discount {
      font-size: 15px;
      line-height: 1.67;
      letter-spacing: -0.005em;
      text-decoration-line: line-through;
      color: $cl-nepal;
    }
  }
</style>
