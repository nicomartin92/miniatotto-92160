const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  // loading: { color: '#fff' }, /* default configuration */
  Loading: false,

  styleResources: {
    scss: [
      '@/assets/scss/variables.scss',
      '@/assets/scss/mixins.scss',
      '@assets/scss/atoms.scss',
      '@assets/scss/animations.scss'
    ]
  },

  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/firebase.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    ['nuxt-svg-sprite-module', {
      directory: '~/assets/icons'
    }]
  ],

  buildDir: '../functions/nuxt',

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {}
    publicPath: '/public/',
    vendor: ['axios'],
    extractCSS: true
  },

  babel: {
    presets: [
      'es2015',
      'stage-0'
    ],
    plugins: [
      ['transform-runtime', {
        'polyfill': true,
        'regenerator': true,
      }]
    ],
  }
}
