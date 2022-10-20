<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})
const mainVillage = {
  main: {
    title: 'The Village name',
    paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  why: {
    title: 'Why you help this village ?',
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  donate: {
    title: "It's your time to make an impact",
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: '/img/classroom.png'
  }
}
</script>

<template class="bg-light-green">
  <div class="bg-[url('/img/main2.png')] px-4 py-20 mb-20">
    <div class="bg-black/50 text-white text-left container mx-auto px-4 py-4">
      <h1 class="text-xl font-medium mb-4">{{mainVillage.main.title}}</h1>
      <p class="text-left leading-7 text-base">{{mainVillage.main.paragraph}}</p>
    </div>
  </div>

  <div class="mb-20">
    <div class="px-14 text-dark text-left container mx-auto py-4">
      <h1 class="text-xl font-medium mb-4">{{mainVillage.why.title}}</h1>
      <p class="text-left leading-7 text-base">{{mainVillage.why.paragraph}}</p>
    </div>
  </div>
  
  <div class=" px-4 py-20 rounded-xl w-3/4 m-auto flex justify-center">
    <div class="bg-[url('/img/classroom.png')] w-400 h-500 rounded-xl basis-1/2" />
    <div class="text-left container mx-auto pl-5 mb-5">
      <h1 class="text-xl font-medium mb-4">{{mainVillage.donate.title}}</h1>
      <p class="text-left text-xs">{{mainVillage.donate.paragraph}}</p>

      <div class="flex flex-row mt-10">
        <div class="rounded-full w-12 h-12 text-center pt-3 mr-5 cursor-pointer bg-amber-500">$25</div>
        <div class="rounded-full w-12 h-12 text-center pt-3 mr-5 cursor-pointer bg-lime-500">$50</div>
        <div class="rounded-full w-12 h-12 text-center pt-3 mr-5 cursor-pointer bg-cyan-600">$100</div>
      </div>

      <BaseButton class="mt-10 uppercase max-w-full px-8 py-4 bg-gradient-to-r from-[#50855D] to-[#396242] border border-[#396242] text-white">
        Donate now
      </BaseButton>
    </div>
  </div>
</template>

<style scoped></style>
