
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: '教育平台 - QRLEVEL',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
     // { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap' },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/main.sass',
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/element-ui',
    '@plugins/scroll.js',
     { src: '~/plugins/confetti.js', mode: 'client' },
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules:
    ['@nuxt/typescript-build']
  ,
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL:'http://localhost:8000'
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    transpile: [/^element-ui/],
  },


  auth: {
    redirect: {
    home: '/'
  },
  strategies: {
    local: {
      endpoints: {
        login: { url: '/auth/token/login/', method: 'post', propertyName: 'auth_token' },
        logout: { url: '/auth/token/logout/', method: 'post' },
        user: { url: '/api/v1/user/me/', method: 'get', propertyName: false }
      },
      // tokenRequired: true,
      tokenType: 'Token',
      // globalToken: true,
      //autoFetchUser: false
    }
  }
}
}
