<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})
const mainVillage = {
  main: {
    title: 'The Village name',
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  why: {
    title: 'Why you help this village ?',
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
}
</script>

<template>
  <div class="bg-[url('/img/main2.png')] px-4 py-20 mb-10">
    <div class="bg-black/50 text-white text-left container mx-auto px-4 py-4">
      <h1 class="text-xl font-medium mb-4">{{mainVillage.main.title}}</h1>
      <p class="text-left text-xs">{{mainVillage.main.paragraph}}</p>
    </div>
  </div>
  
  <div class="bg-[url('/img/main1.png')] px-4 py-20 rounded-xl w-3/4 m-auto">
    <div class="bg-black/50 text-white text-left container mx-auto px-4 py-4">
      <h1 class="text-xl font-medium mb-4">{{mainVillage.why.title}}</h1>
      <p class="text-left text-xs">{{mainVillage.why.paragraph}}</p>
    </div>
  </div>
</template>

<style scoped></style>
