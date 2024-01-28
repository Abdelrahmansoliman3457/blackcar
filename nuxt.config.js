// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  // modules: ["@nuxtjs/i18n"],
  // i18n: {
  //   /* module options */
  //   lazy: true,
  //   langDir: "locales",
  //   strategy: "prefix_except_default",
  //   locales: [
  //     {
  //       code: "en-US",
  //       iso: "en-US",
  //       name: "English(US)",
  //       file: "en-US.json",
  //     },
  //     {
  //       code: "es-ES",
  //       iso: "es-ES",
  //       name: "Español",
  //       file: "es-ES.json",
  //     },
  //     {
  //       code: "in-HI",
  //       iso: "en-HI",
  //       name: "हिंदी",
  //       file: "in-HI.json",
  //     },
  //   ],
  //   defaultLocale: "en-US",
  //   vueI18n: {
  //     fallbackLocale: "en-US",
  //   },
  // },
  app: {
    head: {
      title: "Black Car",
      meta: [
        { name: "description", content: "السيارة السوداء لتاجير السيارات" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        { rel: "icon", type: "image/x-icon", href: "/Group181403.png" },
      ],
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  devtools: { enabled: false },
  plugins: [{ src: "~/plugins/font-awesome.js" }],
  // prime vue
  modules: ["@nuxtjs/axios"],
  modules: [
    // '@nuxtjs/axios',
    "nuxt-primevue",
    "vue3-carousel-nuxt",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  plugins: [
    // ...
    "@/plugins/vue-google-maps",
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: [
    "assets/css/style.css",
    "primevue/resources/themes/lara-light-green/theme.css",
    "primevue/resources/primevue.min.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "bootstrap/dist/css/bootstrap.min.css",
    // "~/assets/styles/main.scss",
    // "primeicons/primeicons.css"
  ],
  primevue: {
    usePrimeVue: true,
    options: {},
    importPT: undefined,
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    components: {
      prefix: "",
      name: undefined,
      include: undefined,
      exclude: undefined,
    },
    directives: {
      prefix: "",
      name: undefined,
      include: undefined,
      exclude: undefined,
    },
    composables: {
      prefix: "",
      name: undefined,
      include: undefined,
      exclude: undefined,
    },
  },
});
