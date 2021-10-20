const FavoriteBtn = () => import('~/components/FavoriteBtn/FavoriteBtn.vue')

export default {
  components: { FavoriteBtn },
  props: {
    isFaf: {
      type: Boolean,
      default: false
    },
    id: {
      type: [Number, String],
      default: 0
    },
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
  watch: {
    propFavorite (next) {
      this.favorite = next
    }
  },
  methods: {

    /**
     * Добавить/Удалить избранное товар
     */
    async toggleFavorite () {
      if (this.favorite) {
        const res = await this.$store.dispatch('favorites/removeProductById', this.id)

        if (res.success) {
          this.$emit('toggleFavorite', this.id, false)
          if (!this.isFaf) {
            this.favorite = false
          }
        }
      } else {
        const res = await this.$store.dispatch('favorites/addProductById', this.id)

        if (res.success) {
          this.$emit('toggleFavorite', this.id, true)
          this.favorite = true
        }
      }
    }
  }
}
