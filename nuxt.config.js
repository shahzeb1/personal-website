import pkg from './package';
const path = require('path');
// Contentful keys
const config = {
  CTF_SPACE_ID: 'pvrwn9m8u5jj',
  CTF_CDA_ACCESS_TOKEN: '6evHqAnYnu1EzbV_FTWeRKdJNF3HhY5swWw0pX7OwGc'
};

export default {
  mode: 'universal',
  generate: {
    dir: 'public'
  },

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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css'
      }
    ],
    script: [{ src: 'https://platform.twitter.com/widgets.js' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /**
   * For contentful
   */
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN
  },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js $jes
   */
  modules: ['@nuxtjs/pwa', 'nuxt-purgecss'],
  purgeCSS: {},

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      }
    },
    extend(config, ctx) {}
  },

  buildModules: [
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-15315607-5'
      }
    ]
  ],

  serverMiddleware: ['~/serverMiddleware/blogRedirect']
};
