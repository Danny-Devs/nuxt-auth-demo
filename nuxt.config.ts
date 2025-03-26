// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],
  compatibilityDate: '2025-03-25',
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI,
    authSecret: process.env.AUTH_SECRET
  },
  nitro: {
    plugins: ['~/server/plugins/mongodb.ts']
  },
  auth: {
    baseURL: process.env.AUTH_ORIGIN,
    provider: {
      type: 'authjs'
    },
    globalAppMiddleware: false
  }
});
