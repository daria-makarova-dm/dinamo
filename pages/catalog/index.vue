<template lang="pug">
  Catalog(
    :title="title"
    :queryParams="queryParams"
    :showList="showList"
    :showValue="showValue"
    :showParams="showParams"
    :sortList="sortList"
    :sortValue="sortValue"
    :sortParams="sortParams"
    :length="length"
    :showTo="showTo"
    :cards="cards"
  )
</template>

<script>
/* eslint-disable no-console */

// Components
// Catalog
const Catalog = () => import('~/components/Catalog/Catalog.vue')

export default {
  name: 'PageCatalog',
  components: {
    Catalog
  },
  async asyncData ({ route, store, $cookies }) {
    const queryParams = ['sorting', 'shown']
    await store.dispatch('filter/fetch', {
      query: route.query,
      queryParams
    })
    const sort = await store.dispatch('sortFetch', route.query.sorting)
    const show = await store.dispatch('showFetch', route.query.shown)
    const data = {
      ...store.getters['filter/getSendData'],
      type: 'cards',
      sorting: store.getters.getSortValue.value
    }

    $cookies.set('shown', show.data.query)
    const catalog = await store.dispatch('catalog/fetch', data)

    return {
      queryParams,
      showList: show.data.list,
      showValue: show.data.value,
      showParams: { shown: show.data.query },
      sortList: sort.data.list,
      sortValue: sort.data.value,
      sortParams: { sorting: sort.data.query },
      title: catalog.data.title,
      length: catalog.data.total,
      showTo: parseInt(show.data.value.value),
      cards: catalog.data.items
    }
  },
  data () {
    return {
      length: 0,
      showTo: 0,
      title: '',
      queryParams: [],
      showValue: {},
      showList: [],
      sortList: [],
      sortValue: {},
      cards: [],
      showParams: {},
      sortParams: {}
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>

<style lang="scss">
  .chosen {
    padding: 10px 15px;
    border-bottom: 1px solid $cl-cobalt;
    &__item {
      display: inline-flex;
      align-items: center;
      background: $cl-cobalt;
      border-radius: 100px;
      color: #fff;
      padding: 5px 15px;
      margin-left: 10px;
      font-size: 12px;
      line-height: 20px;
      &:first-child{
        margin-left: 0;
      }
    }
    &__clear{
      font-size: 12px;
      line-height: 20px;
      margin-left: 15px;
      display: inline-block;
    }
    &__close{
      cursor: pointer;
      margin-left: 7px;
      &-icon{
        width: 8px;
        height: 8px;
      }
    }
  }

  .catalog {
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

    &__title {
      h1 {
        @media (min-width: $tablet) {
          font-size: 56px;
          line-height: 60px;
          padding: 20px;
        }

      span {
        @media (min-width: $tablet) {
          font-size: 14px;
          line-height: 16px;
          font-weight: 500;
        }
        }
      }
    }
  }

  .products-cards {

    &__list {
      display: flex;
      flex-wrap: wrap;
    }
  }

  @media (min-width: $tablet) {

    .catalog {
      &__filter {
        width: calc(100% / 3);
        border-right: 1px solid $cl-cobalt;
      }

      &__cards {
        width: calc(100% / 3 * 2);
      }

      &__content-wrapper {
        display: flex;
      }
    }

    .chosen {
      padding: 20px 0;
      border-bottom: 1px solid $cl-pattens-blue;

      &__name {
        font-size: 14px;
        line-height: 16px;
      }

      &__close-icon {
        width: 12px;
        height: 12px;
      }

      &__item {
        padding: 12px 24px 12px 20px;
      }

      &__close {
        margin-left: 20px;
        display: flex;
        align-items: center;
      }

      &__clear {
        font-size: 14px;
        line-height: 20px;
        margin-left: 10px;
      }
    }
  }

  @media (min-width: $desktop) {
    .catalog__filter {
      width: 25%;
    }

    .catalog__cards {
      width: 75%;
    }
  }

  @media (min-width: $desktop-big) {
    .catalog__filter {
      width: calc(100% / 5);
    }

    .catalog__cards {
      width: calc(100% / 5 * 4);
    }
  }

</style>
