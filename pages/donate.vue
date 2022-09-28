<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
useHead({
  script: [
    {
      children: `window.Givebutter=window.Givebutter||function(){(Givebutter.q=Givebutter.q||[]).push(arguments)};Givebutter.l=+new Date;
window.Givebutter('setOptions', {
  "accountId": "${runtimeConfig.public.giveButterAccountId}",
  "bubble": false
});
    `,
    },
    { src: 'https://js.givebutter.com/elements/latest.js', async: true },
  ],
})
</script>

<template>
  <div class="h-screen">
    <div class="aspect-w-16 aspect-h-9 [&_iframe]:!h-full">
      <div :givebutter-element-id="$config.public.giveButterElementId"></div>
    </div>
  </div>
</template>
