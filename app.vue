<script setup>
useHead( {
  title: "Where are we? Mary's Missionary's projects around the world",
  titleTemplate: ( title ) => `${ title } - Mary's Missionaries`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  bodyAttrs: {
    class: 'test'
  },
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: "Where are we? Mary's Missionary's projects around the world" },
    { name: 'format-detection', content: 'telephone=no' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
    },
  ],
} )
</script>

<template>
  <div>
    <NuxtLayout />
  </div>
</template>
