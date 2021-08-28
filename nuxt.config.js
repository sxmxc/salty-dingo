export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'voidmoose.net',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  server: {
    host: '0.0.0.0'
  },
  serverMiddleware: ['~/server-middleware/logger'],
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL || 'http://natas:3000'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.css',
    '@/assets/buefy-custom.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/strapi',
    '@nuxtjs/auth-next',
    '@nuxtjs/i18n'
  ],
  beaufy: {
    css: true,
    materialDesignIcons: true,
    materialDesignIconsHRef: "http://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css",
    async: true
  },

  auth: {
    localStorage: {
      prefix: 'auth.'
    },
    rewriteRedirects: false,
    fullPathRedirect: false,
    token: {
      global: false
    },
    cookie: {
      options: {
        secure: false
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      home: '/',
      callback: '/connect/auth0'
    },
    strategies: {
      strapiAuth0: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://api.voidmoose.net/connect/auth0',
          token: undefined,
        },
        logoutRedirectUri: 'http://dev.voidmoose.lan:8080/login',
        token: {
          property: 'id_token',
          type: 'Bearer',
          maxAge: 1800
        },
        responseType: 'token',
        scope: ['openid', 'profile', 'email'],
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30
        },
      },
    }

  },

  router: {
  },

  strapi: {
    entities: ['organizations', 'contacts', 'devices'],
    url: 'https://api.voidmoose.net'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://api.voidmoose.net'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
