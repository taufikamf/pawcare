// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      target: 'static',
  buildModules: [
    '@nuxt/image',
  ],
  axios: {
    baseURL: 'http://localhost:4000', // Used as fallback if no runtime config is provided
  },
  modules: ['nuxt-icon','@pinia/nuxt'],
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  plugins: [{ src: "@/plugins/aos.client.ts", ssr: false, mode: "client" }],
})
