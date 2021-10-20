<template>
  <div>
    <PortalTarget name="overlay" />

    <component :is="headerComponent" />

    <main>
      <Nuxt />
    </main>

    <TheFooter />
  </div>
</template>

<script>
// mixins
import resize from '~/mixins/resize'

const TheHeader = () => import('~/components/TheHeader/TheHeader.vue')
const TheHeaderMobile = () => import('~/components/TheHeaderMobile/TheHeaderMobile.vue')
const TheFooter = () => import('~/components/TheFooter/TheFooter.vue')

export default {
  components: { TheHeader, TheFooter, TheHeaderMobile },
  mixins: [resize],
  head () {
    return {
      bodyAttrs: {
        class: this.$store.getters.isNoScroll ? 'no-scroll' : ''
      }
    }
  },
  computed: {
    headerComponent () {
      if (this.mobile === undefined || this.mobile) {
        return 'TheHeaderMobile'
      } else {
        return 'TheHeader'
      }
    }
  },
  created () {
    const ln = this.$i18n.loadedLanguages[0]
    this.$store.commit('changeLn', ln)
    console.log('test')
  }
}
</script>

<style lang="scss">
@import '~/assets/stylesheets/vendor/title.scss';

html {
  font-family: 'TT Hoves', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body.no-scroll {
  overflow: hidden;
}

ul {
  padding: 0;
  list-style-type: none;
}

a {
  text-decoration: none;
}

button:focus {
  outline: none;
}
</style>
