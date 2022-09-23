// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // https://tailwindcss.nuxtjs.org/getting-started/setup
  // https://strapi.nuxtjs.org/
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/strapi'],
  strapi: [
    {
      url: process.env.STRAPI_URL || 'http://localhost:1337',
      prefix: '/api',
      version: 'v4',
      cookie: {},
      cookieName: 'strapi_jwt',
    },
  ],
})
