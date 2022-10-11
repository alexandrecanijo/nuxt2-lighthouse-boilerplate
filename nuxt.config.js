export default {
  srcDir: 'src/',

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  modern: ({ isDev }) => !isDev,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt2 Lighthouse Boilerplate',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt2 Boilerplate with performance in mind, trying to achieve 100% on Lighthouse',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'preconnect',
        href: 'https://cdn.jsdelivr.net',
        crossorigin: 'crossorigin',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@assets/styles/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    hoistUseStatements: true,
    scss: ['~/assets/styles/scss/_variables.scss'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  eslint: {
    fix: true,
    extensions: ['js', 'ts', 'vue', 'css', 'scss'],
  },

  loading: false,

  loadingIndicator: false,

  fetch: {
    client: false,
    server: false,
  },

  features: {
    store: false,
    middleware: false,
    transitions: false,
    deprecations: false,
    validate: false,
    asyncData: false,
    fetch: false,
    clientOnline: false,
    clientPrefetch: false,
    clientUseUrl: true,
    componentAliases: false,
    componentClientOnly: false,
  },

  render: {
    http2: {
      push: true,
      pushAssets: (req, res, publicPath, preloadFiles) =>
        preloadFiles.map((f) => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`),
    },
    asyncScripts: true,
    resourceHints: true,
    ssr: true,
    ssrLog: true,
    static: {
      // 97 days, minimum to pass lighthouse scores - https://github.com/GoogleChrome/lighthouse/issues/11380
      maxAge: 8380800000,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    indicator: false,
    terser: true,
    postcss: null,
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].js' : '[contenthash].js'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[contenthash].js'),
      css: ({ isDev }) => (isDev ? '[name].css' : '[contenthash].css'),
      img: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]'),
      font: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]'),
      video: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'),
    },
    quiet: false,
    optimization: {
      splitChunks: {
        name: true,
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        html5: true,
        removeComments: true,
      },
    },
    extractCSS: true,
  },

  generate: {
    fallback: true,
  },
};
