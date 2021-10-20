export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Dinamo',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/global.js' },
    { src: '@/plugins/vue-plyr', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components/ui-kit'
    ]
  },

  // Router
  router: {
    middleware: 'favorites.middleware'
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt', // Simple usage
    ['portal-vue/nuxt'],
    ['nuxt-i18n', {
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        alwaysRedirect: false,
        fallbackLocale: 'en'
      },
      locales: [
        {
          name: 'Русский',
          code: 'ru',
          iso: 'ru',
          file: 'ru.js'
        },
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en.js'
        }
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'ru'
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // withCredentials: true,
    // baseURL: process.env.NODE_ENV === 'production' ? 'https://dinamo-c73bf-default-rtdb.firebaseio.com/db/' : 'http://localhost:4200/'
    baseURL: 'http://localhost:4200/'
  },

  buildDir: './build/nuxt',

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // publicPath: '/public/',
    extractCSS: true,
    extend (config, ctx) {
      if (ctx.idDev) {
        config.entry.push('eventsource-polyfill')
      }
    }
  },

  styleResources: {
    scss: [
      '@/assets/stylesheets/helpers/_variables.scss',
      '@/assets/stylesheets/helpers/_global.scss',
      '@/assets/stylesheets/helpers/_icons.scss',
      // '@/assets/stylesheets/helpers/_mixins.scss',
      '@/assets/stylesheets/helpers/_fonts.scss'
    ]
  },
  // storybook: {}

  // @nuxtjs/storybook
  // https://storybook.nuxtjs.org/setup
  storybook: {
    addons: [
      {
        name: '@storybook/preset-scss',
        options: {
          cssLoaderOptions: {
            modules: true,
            localIdentName: '[name]__[local]--[hash:base64:5]'
          }
        }
      }
    ],
    stories: [
      '~/stories/**/*.stories.js'
    ]
  },
  // transition: {
  //   name: 'page',
  //   mode: 'out-in'
  // },
  // loading: {
  //   color: 'blue',
  //   height: '5px'
  // }
}
