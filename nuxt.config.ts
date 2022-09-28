// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // https://tailwindcss.nuxtjs.org/getting-started/setup
  // https://strapi.nuxtjs.org/
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/strapi'],
  css: ['aos/dist/aos.css'],
  runtimeConfig: {
    public: {
      giveButterAccountId: process.env.GIVE_BUTTER_ACCOUNT_ID,
      giveButterElementId: process.env.GIVE_BUTTER_ELEMENT_ID,
      giveButterCampaignId: process.env.GIVE_BUTTER_CAMPAIGN_ID,
    },
  },
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
