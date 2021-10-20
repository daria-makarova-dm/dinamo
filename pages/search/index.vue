<template lang="pug">
  .page-search
    .search
      form.search__form(@submit.prevent="onSub")
        .search__row
          input(type="text" name="q" v-model="search")
        button(type="submit") Лупа

    .result-search

      //- Табы навигации
      .result-search__tabs-navigation
        .result-search__tab-nav
          button.result-search__text(@click="tab = 'cards'") Товары ({{ catalog.length }})
        .result-search__tab-nav
          button.result-search__text(@click="tab = 'images'") Образы ({{ images.total }})
        .result-search__tab-nav
          button.result-search__text(@click="tab = 'promotions'") Акции ({{ promotions.total }})

      //- Табы контент
      .result-search__tabs-content
        .result-search__tab-cont(v-show="tab === 'cards'")
          Catalog(
            ref="catalog"
            title="Товары"
            :is-title-length="false"
            :search="search"
            :queryParams="catalog.queryParams"
            :showList="catalog.showList"
            :showValue="catalog.showValue"
            :showParams="catalog.showParams"
            :sortList="catalog.sortList"
            :sortValue="catalog.sortValue"
            :sortParams="catalog.sortParams"
            :length="catalog.length"
            :showTo="catalog.showTo"
            :cards="cards"
          )
        .result-search__tab-cont(v-show="tab === 'images'")
          ImagesList(:imagesData="imagesData")
        .result-search__tab-cont(v-show="tab === 'promotions'")
          PromotionsList( :promoCards="promotions.items" )
</template>

<script>
/* eslint-disable no-console */

// Vuex
import { mapGetters } from 'vuex'

/* Components */

// PromoList
const PromotionsList = () => import('~/components/promotions-component/PromotionsList/PromotionsList.vue')

// Catalog
const Catalog = () => import('~/components/Catalog/Catalog.vue')

// Images
const ImagesList = () => import('~/components/images-component/ImagesList/ImageList')

export default {
  name: 'PageSearch',
  components: {
    Catalog,
    PromotionsList,
    ImagesList
  },
  async asyncData ({ route, store, $cookies }) {
    const search = route.query.q || ''
    const tab = route.query.tab || 'cards'
    const queryParams = ['sorting', 'shown', 'q']
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

    if (route.query.q) {
      data.q = route.query.q
    }
    const answer = await store.dispatch('search/fetchBySearch', data)

    return {
      catalog: {
        queryParams,
        showList: show.data.list,
        showValue: show.data.value,
        showParams: { shown: show.data.query },
        sortList: sort.data.list,
        sortValue: sort.data.value,
        sortParams: { sorting: sort.data.query },
        length: answer.data.cards.total,
        showTo: parseInt(show.data.value.value)
      },
      cards: answer.data.cards.items,
      images: answer.data.images,
      promotions: answer.data.promotions,
      search,
      tab
    }
  },
  data () {
    return {
      tab: 'cards',
      imagesData: {
        id: 1,
        mediaMaterials: {
          urlMain: require('~/assets/image/preview-second-catalog.png'),
          additionalImg: [
            require('~/assets/image/preview-second-catalog.png'),
            require('~/assets/image/preview-second-catalog.png'),
            require('~/assets/image/preview-second-catalog.png')
          ]
        }
      },
      currentStep: 1,
      images: null,
      promitions: null,
      catalog: null,
      search: '',
      timeId: null
    }
  },
  computed: {
    ...mapGetters('search', [
      'getSearchAnswer'
    ]),
    ...mapGetters('filter', [
      'getSendData'
    ]),
    getShowValue () {
      return this.$store.getters.getShowValue
    },
    getSortValue () {
      return this.$store.getters.getSortValue
    }
  },
  watch: {
    tab (next) {
      const query = {
        ...this.$route.query,
        tab: next
      }

      this.tab = next
      this.$router.push({
        path: this.$route.path,
        query
      })
    }
  },
  methods: {
    onSub () {
      const data = {
        ...this.getSendData,
        type: 'cards',
        sorting: this.getShowValue.value,
        q: this.search
      }

      const query = {
        ...this.$route.query,
        q: this.search
      }

      this.$router.push({
        path: this.$route.path,
        query
      })

      clearTimeout(this.timeId)
      this.timeId = setTimeout(async () => {
        const answer = await this.$store.dispatch('search/fetchBySearch', data)
        this.cards = answer.data.cards.items
        this.catalog.length = answer.data.cards.total
        this.promotions = answer.data.promotions
        this.images = answer.data.images
        this.$refs.catalog.resetShowMore()
        console.log('answer: ', answer)
      }, 225)
    }
  }
}
</script>

<style></style>
