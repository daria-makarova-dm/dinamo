<template lang="pug">
  include ./ImageList
</template>

<script>
import { mapGetters } from 'vuex'
import showMore from '~/mixins/showMore'
const TheImageCart = () => import('~/components/image-card-component/TheImageCart/TheImageCart.vue')
export default {
  name: 'ImageList',
  components: { TheImageCart },
  mixins: [showMore],
  props: {
    imagesData: {
      type: Array,
      required: true
    }
  },
  async asyncData ({ route, store, $cookies }) {
    const queryParams = ['sorting', 'shown']
    // eslint-disable-next-line no-unused-vars
    const filter = await store.dispatch('filter/fetch', {
      query: route.query,
      queryParams
    })

    console.log('$cookies: ', $cookies)
    const sort = await store.dispatch('sortFetch', route.query.sorting)
    const show = await store.dispatch('showFetch', route.query.shown)
    // TODO: карректировать параметры для catalog из url когда переходим
    const catalog = await store.dispatch('catalog/fetch', route.query)

    $cookies.set('shown', show.data.query)

    return {
      queryParams,
      showList: show.data.list,
      showValue: show.data.value,
      showParams: { shown: show.data.query },
      sortList: sort.data.list,
      sortValue: sort.data.value,
      sortParams: { sorting: sort.data.query },
      title: catalog.data.title,
      inLength: catalog.data.total,
      inShowTo: parseInt(show.data.value.value),
      cards: catalog.data.items
    }
  },
  data () {
    return {
      inImagesData: this.imagesData,
      imageCart: {
        photoUrl: require('~/assets/image/image-card.png'),
        photoTitle: 'На зимний матч',
        quote: {
          title: 'На зимний матч',
          quote: 'Вот такой классный у нас образ. Все болельщики на стадионе захотят такой же. Даже с трибун противника будет видно какой классный образ у вас.',
          link: `/images/${this.imagesData[0].id}`
        },
        productCarts: [
          {
            productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
            favorite: false,
            title: 'Футболка вратарская взрослая',
            firm: 'Сезон 2020/2021',
            price: '5990'
          },
          {
            productPreviewImg: require('~/assets/image/form.png'),
            favorite: false,
            title: 'Футболка вратарская взрослая',
            firm: 'Сезон 2020/2021',
            price: '5990'
          },
          {
            productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
            favorite: false,
            title: 'Футболка вратарская взрослая',
            firm: 'Сезон 2020/2021',
            price: '5990'
          },
          {
            productPreviewImg: require('~/assets/image/form.png'),
            favorite: false,
            title: 'Футболка вратарская взрослая',
            firm: 'Сезон 2020/2021',
            price: '5990'
          },
          {
            productPreviewImg: require('~/assets/image/form.png'),
            favorite: false,
            title: 'Футболка вратарская взрослая',
            firm: 'Сезон 2020/2021',
            price: '5990'
          },
          {
            productPreviewImg: require('~/assets/image/preview-second-catalog.png'),
            favorite: false,
            title: 'Футболка вратарская взрослая',
            firm: 'Сезон 2020/2021',
            price: '5990'
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters('filter',
      [
        'getForwhom',
        'getSelected'
      ]
    )
  },
  methods: {
    changeFilter (key, value) {
      this.toggleSelected(key, value)

      if (key.split('-').includes('category')) {
        this.sendDataCards()
      } else {
        this.sendDataCount()
      }
    },
    isSelected (key) {
      return this.getSelected.findIndex(item => item.key === key) >= 0
    },
    async showMore () {
      const nextPage = this.inCurrentStep + 1
      const data = {
        // ...this.filterParams,
        // ...this.sortParams,
        // ...this.showParams,
        page: nextPage
      }

      const res = await this.$store.dispatch('catalog/fetch', data)

      if (res.success) {
        this.cards.push(...res.data.items)
        this.inCurrentStep = nextPage
        this.inOffset += this.showParams.shown
      }
    }
  }
}
</script>

<style lang="scss">
  @import "ImageList";
</style>
