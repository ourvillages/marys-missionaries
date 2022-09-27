<script setup>
useHead({
  script: [
    {
      src: 'https://js.givebutter.com/elements/latest.js',
      async: true,
    },
    {
      children: `
        window.Givebutter=window.Givebutter||function(){(Givebutter.q=Givebutter.q||[]).push(arguments)};Givebutter.l=+new Date;
        window.Givebutter('setOptions', {
          "accountId": "DK1UYLR9RVQtlGXd"
        });
    `,
    },
  ],
})
</script>

<template>
  <div class="h-screen">
    <div class="aspect-w-16 aspect-h-9">
      <div givebutter-element-id="1goAwj"></div>
    </div>
  </div>
</template>
