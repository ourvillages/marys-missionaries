export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
  css: ['aos/dist/aos.css'],
  runtimeConfig: {
    public: {
      giveButterAccountId: process.env.GIVE_BUTTER_ACCOUNT_ID,
      giveButterElementId: process.env.GIVE_BUTTER_ELEMENT_ID,
      giveButterCampaignId: process.env.GIVE_BUTTER_CAMPAIGN_ID,
    },
  },
  typescript: {
    shim: false,
    strict: true,
  },
})
